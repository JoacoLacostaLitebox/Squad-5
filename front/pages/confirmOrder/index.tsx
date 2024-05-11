import Image from 'next/image';
import BaseLayout from '@/components/BaseLayout/BaseLayout';

import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

import SemiCircle from './assets/semi-circle.svg'
import { useAuth } from '@/context/AuthContext';
import BagInfoComponent from '@/components/BagInfoComponent/BagInfoComponent';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';

const Phonk = localFont({ src: "../../public/fonts/PhonkContrast.otf" });
const DMSans = DM_Sans({ style: ["normal"], subsets: ["latin"] });

// TODO este array deberia ser reemplazado con lo que cargue el usuario
const mockTrashItems = [{ itemName: 'Desechos de metal', itemQuantity: 2 }, { itemName: 'Desechos organicos', itemQuantity: 2 }, { itemName: 'Desechos de plastico', itemQuantity: 3 }, { itemName: 'Desechos de vidrio', itemQuantity: 1 }]

const ConfirmOrder = () => {
    const { user } = useAuth()
    const { push } = useRouter()

    const handleConfirm = async () => {
        try {
            let data = {
                "userId": user?.uid,
                "fukupoints": mockTrashItems.reduce((acum, el) => acum + el.itemQuantity, 0)
            };

            let response = await fetch('http://3.16.108.75:3000/fukupoints', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            push('/successOrder')
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    }

    return (
        <BaseLayout noBottomDecoration>
            <div className='flex relative mt-8 mb-6 isolate'>
                <h2 className={`${Phonk.className} text-fukuro-black text-2xl mt-5 mb-2 pr-[116px]`}>
                    Confirmar el contenido de tu bolsa
                </h2>
                <Image className='absolute -right-6 -z-10' src={SemiCircle} alt='semi circle image' />
            </div>
            <div className='flex flex-col gap-4 mb-16'>
                <BagInfoComponent title='Cantidad de elementos' bagItems={mockTrashItems} />
                <BagInfoComponent title='Punto de entrega' description='Montevideo y que se yo que mas es lo que falta' />
                <Button
                    text="Confirmar y continuar"
                    type="primary"
                    onClick={handleConfirm}
                />
                <Link href={`/`}>
                    <Button text="Cancelar llenado de la bolsa" />
                </Link>
            </div>
        </BaseLayout>
    )
}

export default ConfirmOrder;