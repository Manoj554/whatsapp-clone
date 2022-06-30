import { useEffect } from 'react';
import { BsWhatsapp, BsLaptop } from 'react-icons/bs';


const InitialLoading = () => {
    useEffect(() => {
        let dots = document.getElementById('dots');
        let itemLength = dots.children.length;
        let currentNode = 1;

        let TimeInterval = setInterval(() => {
            let previousNode;
            if (currentNode === 0) {
                previousNode = itemLength - 1;
            } else {
                previousNode = currentNode - 1;
            }

            dots.children[previousNode].classList.remove('text-white');
            dots.children[currentNode].classList.add('text-white');
            currentNode = (currentNode + 1) % itemLength;
        }, 200);

        return () => {
            clearInterval(TimeInterval);
        }
    }, []);

    return (
        <div className='flex flex-col w-full h-[90vh] items-center justify-center'>
            <div className='text-5xl flex min-w-[380px] w-1/3 text-[#8696a0] justify-center space-x-4 items-center'>
                <BsWhatsapp />
                <div id='dots' className='text-[#282828] flex space-x-3'>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                </div>
                <BsLaptop />
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl'>Connecting . . .</h1>
            </div>
        </div>
    )
}

export default InitialLoading;