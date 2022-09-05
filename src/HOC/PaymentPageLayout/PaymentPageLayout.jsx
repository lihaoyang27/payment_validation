import React from 'react';
import './paymentPageLayout.scss'

import FormContainer from "../../components/FormContainer/FormContainer";

function PaymentPageLayout() {
    return (
        <div className='paymentPage'>
            <div className='paymentPageHeader'>
                <div className='paymentPageHeaderLogo'/>
            </div>
            <form className='formContent'>
                <div className='formTitle'>Payment</div>
                <FormContainer/>
            </form>

        </div>
    );
}

export default PaymentPageLayout;