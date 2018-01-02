export class QuestionBase<T>{
    value: T; // 值，类型可选
    key: string; // 字段名
    label: string; // 控件前的文字提示
    required: boolean; // 是否为必填
    disabled: boolean; // 是否禁用
    reg: string; // 正则
    prompt: string; // 验证不通过提示
    order: number; // 排序
    controlType: string; // 渲染类型
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        disabled?: boolean,
        reg?: string,
        prompt?: string,
        order?: number,
        controlType?: string
    } = {}) {
        // 设置各个值的默认值
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.disabled = !!options.disabled;
        this.reg = options.reg || '';
        this.prompt = options.prompt || '该项为必填/选项';
        this.order = options.order || 0;
        this.controlType = options.controlType || '';
    }
}
