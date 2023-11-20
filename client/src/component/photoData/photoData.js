import Legion5iProImage from '../images/Legion-5i-pro.png';
import ThinkPadX1NanoImage from '../images/ThinkPad-x1-Nano.png';
import LenovoYoga9iImage from '../images/Lenovo-yoga-9i.png';
import LenovoIdealPadFlexImage from '../images/Lenovo-idealPad-Flex.png';
import Yoga7i7maImage from '../images/Yoga-7i-7ma.png';
import IdeaPad1N4120Image from '../images/IdeaPadi1N4120.png';
import Ipad1Amd3020EImage from '../images/Ipad-1-Amd-3020E.png';
import LenovoE41_25A4Image from '../images/LenovoE41-25A4.png';

export const photoData = [
    { image: Legion5iProImage, text: 'Procesadores Intel® Core™ de hasta 12va generación Pantalla de 16” hasta WQXGA, 500 nits, 100% sRGB y 165hz refresh rate Hasta 32 GB de memoria RAM' },
    { image: ThinkPadX1NanoImage, text: 'Pantalla 2K de 13″ con imágenes ricas en color, con o sin función táctil Seguridad de vanguardia y pruebas MIL-SPEC para mayor fiabilidad' },
    { image: LenovoYoga9iImage, text: 'La flexibilidad multimodo de 360 grados se une al entretenimiento móvil de primera calidad Impresionante pantalla y cuatro altavoces Bowers & Wilkins' },
    { image: LenovoIdealPadFlexImage, text: 'Laptop 2-en-1 versátil con un diseño convertible de 360 grados' },
    { image: Yoga7i7maImage, text: 'Lenovo Ideapad 1 14igl05 Intel N4020 4gb Ram 64gb' },
    { image: IdeaPad1N4120Image, text: 'Notebook Lenovo Ideapad 1i Intel Celeron N4120 4gb 128gb Ssd 4.32654.3 out of 5 stars. 265 product reviews. Reviewers noted: lightweight • easy to set up • performs poorly • attractive • easy to use • compact • long battery life La Notebook Lenovo Ideapad 1i es el equipo perfecto para aquellos que buscan un rendimiento confiable y una experiencia de uso fluida. Con su procesador Intel Celeron N4120' },
    { image: Ipad1Amd3020EImage, text: 'Equipada con la plataforma Intel® Evo™ y los procesadores Intel® Core™ de 13va generación La flexibilidad multimodo de 360 grados' },
    { image: LenovoE41_25A4Image, text: 'NOTEBOOK LENOVO 14" E41-25 A4-4350B 4GB 500GB Características del producto Memoria RAM: 4 GBTamaño de la pantalla: 14 "Duración de la batería: 6 hTipo de resolución: HDCon pantalla táctil: NoCon lector de huella digital ...' },
    // Puedes agregar más fotos aquí
];

export const findPhotoById = (id) => {
    return photoData[id];
};
