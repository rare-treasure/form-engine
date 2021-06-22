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
    type: string;
    label: string;
    prop: string;
    span: number;
    placeholder: string;
    slot: boolean;
    formSlot: boolean;
    clearable: boolean;
    readonly: boolean;
    disabled: boolean;
    row: boolean;
    linefeed: boolean;
    rules: Rule | Rule[];
    props: FormItem;
    required: boolean;
    requiredErrMsg: string;
    isHideEditPlaceholder: boolean;
    options: {
        label?: string;
        value: string | number;
        disabled?: boolean;
    }[];
    colProps: Col;
    formItemProps: Record<string, () => void>;
    formItemOn: Record<string, () => void>;
    componentProps: Record<string, any>;
    componentOn: Record<string, () => void>;
};
export declare type RowProps = Row;
export declare type ColProps = Col;
export default class FormEngine extends Vue {
    items: Item[];
    span: number;
    isHideEditPlaceholder: boolean;
    rules: Rule;
    formData: FormData;
    rowProps: RowProps;
    colProps: ColProps;
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
