
import { LightningElement } from 'lwc';

export default class InvoiceCreation extends LightningElement {
    params = {};

    connectedCallback() {
        this.extractUrlParams();
    }

    extractUrlParams() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        this.params.origin_record = urlParams.get('origin_record');
        this.params.account = urlParams.get('account');
        this.params.invoice_date = urlParams.get('invoice_date');
        this.params.invoice_due_date = urlParams.get('invoice_due_date');
        this.params.child_relationship_name = urlParams.get('child_relationship_name');
        this.params.line_item_description = urlParams.get('line_item_description');
        this.params.line_item_quantity = urlParams.get('line_item_quantity');
        this.params.line_item_unit_price = urlParams.get('line_item_unit_price');
    }
}