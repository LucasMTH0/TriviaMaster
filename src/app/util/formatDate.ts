export function formatDate(data: Date): string {
    const day = String(data.getUTCDate()).padStart(2, '0');
    const month = String(data.getUTCMonth() + 1).padStart(2, '0');
    const year = data.getUTCFullYear();

    return `${day}/${month}/${year}`;
}
