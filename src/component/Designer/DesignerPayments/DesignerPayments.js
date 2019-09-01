import React, {Component} from 'react';
import GetToApi from '../../../controler/getToApi';

//
//
//


//
//compoents
//


import './style.css';
import NoPaymentBox from '../../noPaymentBox/noPaymentBox';


class DesignerPayments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount = async () => {

        const res = await GetToApi('wallet/invoice/request');
        // console.log(res)
        this.setState({
            data: res.data.invoice
        })
    }

    statusChecker(status) {
        switch (status) {
            case"success":
                return "پرداخت موفق"
            case"pending":
                return "درحال بررسی"
            case"failed":
                return "پرداخت ناموفق"
        }

    }


    render() {

        const _renderInvoice = (
            this.state.data ? this.state.data.map((data, index) => {
                return <tr className="DPB-body" key={index}>
                    <td className="body-child1">{index + 1}</td>
                    <td className="body-child">{data.price}</td>
                    <td className="body-child">{data.created_at_persian}</td>
                    <td className={"body-child payment" + data.status}>{this.statusChecker(data.status)}</td>
                    <td className="body-child">تسویه حساب</td>
                </tr>
            }) : <NoPaymentBox/>
        )
        return (
            <div className="DesignerPayments">
                <div className="DP-title">
                    تراکنشها
                </div>

                <div className="DP-box">
                    <table>
                        <tbody>

                        <tr className="DPB-title">
                            <th className="title-child1">ردیف</th>
                            <th className="title-child">قیمت</th>
                            <th className="title-child">تاریخ</th>
                            <th className="title-child">وضعیت</th>
                            <th className="title-child">توضیحات</th>
                        </tr>
                        {_renderInvoice}
                        </tbody>

                    </table>
                </div>


            </div>
        );
    }
}

export default DesignerPayments;