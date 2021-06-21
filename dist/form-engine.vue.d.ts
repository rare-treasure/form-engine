import { Vue } from 'vue-property-decorator';
import { Form, FormItem, Row, Col } from 'element-ui';
import { ValidateCallback, ValidateFieldCallback } from 'element-ui/types/form.d';
export declare type Rule = {
    [key: string]: any;
};
export declare type FormData = {
    [key: string]: any;
};
export declare type Item = {
    span: number;
    row: number;
    prop: string;
    formSlot: boolean;
    required: boolean;
    requiredErrMsg: string;
    slot: boolean;
    rules: Rule | Rule[];
    label: string;
    placeholder: string;
    type: string;
    options: {
        label?: string;
        value: string | number;
    }[];
    clearable: boolean;
    readonly: boolean;
    disabled: boolean;
    notEditHidePlaceholder: boolean;
    props: FormItem;
    on: Record<string, () => void> | HTMLElementEventMap;
    colProps: Col;
    colOn: Record<string, () => void> | HTMLElementEventMap;
    compProps: Record<string, any>;
    compOn: Record<string, () => void> | HTMLElementEventMap;
};
export declare type RowProps = Row;
export declare type ColProps = Col;
export declare type On = Record<string, () => void> | HTMLElementEventMap;
export default class FormEngine extends Vue {
    items: Item[];
    span: number;
    notEditHidePlaceholder: boolean;
    rules: Rule;
    formData: FormData;
    rowProps: RowProps;
    rowOn: On;
    colProps: ColProps;
    colOn: On;
    disabled: boolean;
    clearable: boolean;
    watchItems(): void;
    watchRules(): void;
    watchFormData(): void;
    newFormData: FormData;
    newRules: Rule;
    newItems: Item[];
    $refs: {
        form: Form;
    };
    isChangeValidateRule: boolean;
    created(): void;
    getAttrValue(dataSource: any, key: string, defalutValue: any): any;
    getComponentName(type: string): string;
    getPlaceholder(item: Item): any;
    getLinefeedSpan(idx: number): number;
    init(): void;
    handleFormData(isInit?: boolean): void;
    handleRules(isInit?: boolean): void;
    clearValidate(props?: string[] | string): void;
    resetFields(): void;
    validateField(props: string[] | string, cb?: ValidateFieldCallback): void;
    validate(cb?: ValidateCallback): Promise<FormData>;
}
