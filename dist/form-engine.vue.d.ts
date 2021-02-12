import { Vue } from 'vue-property-decorator';
import { Form, FormItem, Row, Col } from 'element-ui';
import { ValidateCallback, ValidateFieldCallback } from 'element-ui/types/form.d';
declare type Rule = {
    [key: string]: any;
};
declare type FormData = {
    [key: string]: any;
};
declare type Item = {
    span: number;
    row: number;
    prop: string;
    formSlot: boolean;
    required: boolean;
    slot: boolean;
    rules: Rule | Rule[];
    label: string;
    placeholder: string;
    type: string;
    options: {
        label?: string;
        value: string | number;
    }[];
    props: FormItem;
    on: Record<string, () => void> | HTMLElementEventMap;
    colProps: Col;
    colOn: Record<string, () => void> | HTMLElementEventMap;
    compProps: Record<string, any>;
    compOn: Record<string, () => void> | HTMLElementEventMap;
};
export default class FormEngine extends Vue {
    items: Item[];
    rules: Rule;
    formData: FormData;
    rowProps: Row;
    rowOn: Record<string, () => void> | HTMLElementEventMap;
    colProps: Col;
    colOn: Record<string, () => void> | HTMLElementEventMap;
    watchItems(): void;
    watchRules(): void;
    watchFormData(): void;
    newFormData: FormData;
    newRules: Rule;
    newItems: Item[];
    $refs: {
        form: Form;
    };
    created(): void;
    getComponentName(type: string): string;
    getPlaceholder(item: Item): string;
    init(): void;
    handleFormData(isInit?: boolean): void;
    handleRules(isInit?: boolean): void;
    clearValidate(props?: string[] | string): void;
    resetFields(): void;
    validateField(props: string[] | string, cb?: ValidateFieldCallback): void;
    validate(cb?: ValidateCallback): Promise<FormData>;
}
export {};
