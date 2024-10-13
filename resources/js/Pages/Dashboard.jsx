import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Main from '@/Layouts/Main';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <Main>
            <Head title='Dashboard'/>
        </Main>
    );
}
