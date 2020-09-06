import React from 'react'
import AdmiChallengesView from '../views/AdminChallengesView'
import AdminFormController from './AdminFormController'
import {URL_GET_MATERIAL_NAMES, URL_POST_MATERIAL, URL_GET_MATERIAL_DATA} from '../constants'

export default class AdminChallengesController extends AdminFormController {
    constructor(props) {
        super(props)
        this.URL_GET_LIST = URL_GET_MATERIAL_NAMES
        this.URL_POST_OBJECT = URL_POST_MATERIAL
        this.URL_GET_OBJECT_DATA = URL_GET_MATERIAL_DATA
    }
}