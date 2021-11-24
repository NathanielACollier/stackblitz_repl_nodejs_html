import glob from "glob";

/*
Found how to use glob here:
    https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-directories-nodejs/47492545
*/

export async function generateTableOfContents(): Promise<string>{

    let toc = `
        <ul>
    `;

    let matches = await globAsync('pages/**/*');

    for(let path of matches){
        toc += `
            <li>
                <a href='${path}'>${path}</a>
            </li>
        `;
    }

    toc += `
        </ul>
    `;

    return toc;
}


async function globAsync(path: string): Promise<string[]>{
    return new Promise<string[]>( (resolve, error)=> {
        glob(path, (err, matches) => {
            resolve(matches);
        });
    });
}

