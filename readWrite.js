import fs from 'fs' 

export const read = (file) => {
    const result = fs.readFileSync(file, 'utf-8');
    return JSON.parse(result);
}

export const write = (file, newContent) => {
    const content = JSON.stringify(newContent)
    fs.writeFileSync(file, content)
}