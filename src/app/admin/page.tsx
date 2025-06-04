async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function AdminPage() {
    await delay(2000);

    return (
        <div>
            <h1>Admin page!</h1>
        </div>
    );
}
