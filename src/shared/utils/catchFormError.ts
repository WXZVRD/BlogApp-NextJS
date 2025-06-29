export function catchFormError<TField extends string>(
    errorMessage: string,
    fields: readonly TField[]
): { target: TField | "root"; message: string } {
    const lowered = errorMessage.toLowerCase();

    const foundField = fields.find((field) => lowered.includes(field.toLowerCase()));

    return {
        target: foundField ?? "root",
        message: errorMessage,
    };
}
