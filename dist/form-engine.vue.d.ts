import { Vue } from 'vue-property-decorator';
import { FormItem, Button, Input, DatePicker, Select, Form, Col, Row } from 'element-ui';
declare type Item = {
    span: number;
    row: number;
    prop: string;
    formSlot: boolean;
    required: boolean;
    slot: boolean;
    rules: Record<string, unknown>[] | Record<string, unknown>;
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
    compProps: Select | DatePicker | Input | Button;
    compOn: Record<string, () => void> | HTMLElementEventMap;
};
export default class FormEngine extends Vue {
    items: Item[];
    rules: {
        [key: string]: any;
    };
    formData: {
        [key: string]: any;
    };
    rowProps: Row;
    rowOn: Record<string, () => void> | HTMLElementEventMap;
    colProps: Col;
    colOn: Record<string, () => void> | HTMLElementEventMap;
    watchItemsRules(): void;
    watchFormData(): void;
    newFormData: {
        [key: string]: any;
    };
    newRules: {
        [key: string]: any;
    };
    $refs: {
        form: Form;
    };
    created(): void;
    getComponentName(type: string): string;
    getPlaceholder(item: Item): string;
    init(): void;
    initFormData(): void;
    handleRules(): void;
    clearValidate(props?: string[] | string): void;
    resetFields(): void;
    validateField(props: string[] | string, cb: (errorMessage: string) => void): void;
    validate(cb: (isValid: boolean, invalidFields: object, data: {
        [key: string]: any;
    }) => void): void | Promise<{
        [key: string]: any;
    }>;
}
export {};
