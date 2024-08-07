//?Desestructuracion de objetos
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: String;
    details: Details;
}

interface Details{
    author: string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 4.36,
    song: 'Believe in love',
    details: {
        author: 'Scorpions',
        year:1986
    }
}

/*La desestrcturacion se refiere a tomar ciertas propiedades de ciertas estructuras y objetos*/

//const {song} = audioPlayer;

/* Si tenemos dos variables con el nombre de la destructuracion podemos renombrar
la variable de la siguiente manera */
    const song = 'New song'
    const {song:anotherSong, songDuration: duration, details:{author}} = audioPlayer; //Desestructura un objeto que esta dentro de otro
    console.log('Song: ' ,anotherSong, 'Duracion', duration);
    console.log('Song: ',author);
//O desestructuramos y luego llamamos en otra linea
    /*const {details} = audioPlayer;
    const {author} = details; */
    
//?Desestructuracion de arreglos
    const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];
    const [p1, p2, p3 = 'not found'] = dbz;
    console.log('Personaje 3: ', p3);
    
