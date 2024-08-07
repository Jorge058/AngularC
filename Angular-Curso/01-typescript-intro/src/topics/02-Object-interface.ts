const skills: string[] = ['Bash','Counter','Healings'];

/* Si queremos declarar un objeto que contenga distintos tipos necesitamos una interfaz
que va a funcionar como plantilla*/
    interface Character{
        name:string;
        hp: number;
        skills: string[];
        hometown?: string; //Para que sea opcional en caso de que no lo definamos
    }

    const strider: Character = {
        name: 'strider',
        hp: 100,
        skills: ['Bash','Counter'],
    }

    strider.hometown = 'Rivendell'
    console.table(strider)
export{}