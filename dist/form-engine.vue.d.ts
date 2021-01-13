import { Vue } from 'vue-property-decorator';
import { FormItem, Button, Input, DatePicker, Select, Form } from 'element-ui';
declare type Item = {
    span: number;
    row: number;
    labelWidth: string;
    width: number | string;
    prop: string;
    formSlot: boolean;
    required: boolean;
    slot: boolean;
    rules: Record<string, unknown>[] | Record<string, unknown>;
    label: string;
    placeholder: string;
    size: string;
    type: string;
    props: FormItem;
    on: Record<string, () => void>;
    compProps: Select | DatePicker | Input | Button;
    compOn: Record<string, () => void>;
};
export default class FormEngine extends Vue {
    items: Item[];
    size: string;
    rules: {
        [key: string]: any;
    };
    labelWidth?: string;
    width?: string;
    formData: {
        [key: string]: any;
    };
    rowProps: {
        [key: string]: any;
    };
    rowOn: Record<string, () => void>;
    colProps: {
        [key: string]: any;
    };
    colOn: Record<string, () => void>;
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
