import * as path from 'path';
import { readFile, writeFile } from "fs/promises";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
    // filePath = path.join(__dirname, 'messages.json');
    filePath = 'messages.json';

    async findOne(id: string) {
        const contents = await readFile(this.filePath, 'utf-8');
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll() {
        const contents = await readFile(this.filePath, 'utf-8');
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content: string) {
        const contents = await readFile(this.filePath, 'utf-8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = {id, content};

        await writeFile(this.filePath, JSON.stringify(messages));
    }
}