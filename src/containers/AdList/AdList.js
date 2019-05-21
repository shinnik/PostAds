import React, {Component} from 'react';
import {Text} from "../../components/Text/Text";
import { connect } from 'react-redux';
import {deleteAdvert, editAdvert, finishAction} from "../../store/actions/advert";

import * as styles from "./AdList.module.css"
import {Picture} from "../../components/Picture/Picture";
import Icon from "../../components/Icon/Icon";
import Input from "../../components/Input/Input";
import {Label} from "../../components/Label/Label";

class AdList extends Component {

    ads = JSON.parse(localStorage.getItem('ads')) || [];

    componentDidUpdate() {
        if (this.props.published || this.props.deleted) {
            this.ads = JSON.parse(localStorage.getItem('ads'));
            this.props.endAction()
        }
    }

    test(id) {
        console.log(id, 'ID');
    }

    render() {
        return (
            <>
                <Text className='AdListHeader' size='L'>Объявления</Text>
                <ul className={styles.AdList}>
                {this.ads.map((ad) => {
                    return (
                        <li id={ad.id} className={styles.Container}>
                            <div className={styles.WrapperOne}>
                                <Text size='M'>{ad.header}</Text>
                                <Text className='AdvBodyText'name={ad.id} >{ad.body}</Text>
                                {ad.photo && <Picture src={ad.photo} className='Middle'/>}
                            </div>
                            <ul className={styles.WrapperTwo}>
                                <li className={styles.UserDataItem}>
                                    <Icon className='initial' iconType='phone'/>
                                    <Text size='normal' className='UserDataText'>{ad.phone}</Text>
                                </li>
                                { ad.city && <li className={styles.UserDataItem}>
                                    <Icon className='initial' iconType='location'/>
                                    <Text size='normal' className='UserDataText'>{ad.city}</Text>
                                </li> }
                                <li className={styles.RemoveEditButtons}>
                                    <Label htmlFor={ad.id + '_edit'} className='EditLabel'>
                                        <Input onClick={() =>this.props.onAdvEdit(ad.id)} id={ad.id + '_edit'} hidden />
                                    </Label>
                                    <Label htmlFor={ad.id + '_remove'} className='RemoveLabel'>
                                        <Input onClick={() => this.props.onAdvDelete(ad.id)} id={ad.id + '_remove'} hidden />
                                    </Label>
                                </li>
                            </ul>
                        </li>
                    )
                }).reverse()}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        published: state.getIn(['published']),
        deleted: state.getIn(['deleted'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        endAction: () => dispatch(finishAction()),
        onAdvDelete: (id) => dispatch(deleteAdvert(id)),
        onAdvEdit: (id) => dispatch(editAdvert(id))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdList);

