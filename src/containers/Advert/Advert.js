import React, {Component} from 'react';
import Icon from "../../components/Icon/Icon";
import Input from "../../components/Input/Input";
import { connect } from 'react-redux';


import styles from './Advert.module.css'
import Datalist from "../../components/Datalist/Datalist";
import {applyAdvert, cancelPicture, checkValidation, setText, uploadFile} from "../../store/actions/advert";
import {Label} from "../../components/Label/Label";
import {Button} from "../../components/Button/Button";
import {Picture} from "../../components/Picture/Picture";
import {Text} from "../../components/Text/Text";


class Advert extends Component {


    onInputUpdate(event, id, validator) {
        const content = event.target.value;
        const validationInfo = {content, id, validator};
        this.props.onCheckValidation(validationInfo)
    }

    onTyping(id, event) {
        const content = event.target.value || event.target.innerText;
        this.props.onChange(id, content);
    }

    render() {
        return (
            <>
                <Text size='L'>Подать объявление</Text>
                { this.props.inputs.map((inp, index) => {
                    return (
                        <div key={index} className={styles.LabelWrapper}>
                            <Text>{inp.get('name')}</Text>
                            <div className={styles.InputWrapper}>
                                <Input validation={inp.get('status')}
                                       className={inp.get('id')}
                                       multiline={inp.get('multiline')}
                                       onBlur={(event) => this.onInputUpdate(event, inp.get('id'), inp.get('validator'))}
                                       value={inp.get('content')}
                                       onChange={(event) => this.onTyping(inp.get('id'), event)}
                                       placeholder={inp.get('placeholder')}/>
                                <Icon id={inp.get('name')}
                                      iconType={inp.get('status')}/>
                                <Text className={'for'+inp.get('id')} validator={inp.get('status')}>{inp.get('text')}</Text>
                            </div>
                        </div>
                    )
                }) }
                <div className={styles.LabelWrapper}>
                    <Text>{this.props.datalist.getIn(['input', 'name'])}</Text>
                    <Datalist value={this.props.datalist.getIn(['input', 'content'])}
                              options={this.props.datalist.getIn(['options']).toArray()}
                              onChange={(event) => this.onTyping(this.props.datalist.getIn(['input', 'id']), event)}
                              onOptionSelected={(event) => this.onTyping(this.props.datalist.getIn(['input', 'id']), event)}
                              onEraseText={() => this.props.onChange(this.props.datalist.getIn(['input', 'id']), '')}/>
                </div>
                <div className={styles.FileInputWrapper}>
                    <Label htmlFor='file' className='FileInputLabel'>
                        <Input id='file' type='file' hidden onChange={(event) => this.props.onFileUpload(event.target.files)}/>
                    </Label>
                    { this.props.attachment.getIn(['file']) &&
                    <div className={styles.PictureInfoWrapper}>
                        <Picture src={this.props.attachment.getIn(['file'])}
                                 className='Mini'
                                 clickable={false}/>
                        <div className={styles.PictureNameWrapper}>
                            <Text className='Filename'>{this.props.attachment.getIn(['shortfn'])}</Text>
                            <Text onClickAction={this.props.onCancelPicture} className='Remover'>Удалить</Text>
                        </div>
                    </div> }
                </div>
                <Button disabled={this.props.button.get('disable')}
                        onClick={this.props.onApply}
                        className='ApplyButton'>Подать</Button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputs: state.getIn(['inputs']),
        datalist: state.getIn(['datalist']),
        attachment: state.getIn(['attachment']),
        button: state.getIn(['button'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckValidation: (validationInfo) => dispatch(checkValidation(validationInfo)),
        onChange: (id, text) => dispatch(setText(id, text)),
        onFileUpload: (file) => dispatch(uploadFile(file)),
        onCancelPicture: () => dispatch(cancelPicture()),
        onApply: () => dispatch(applyAdvert())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Advert);
