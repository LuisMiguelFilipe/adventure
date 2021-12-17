import {Icon} from "@/types/icons";

export class QuestModel {
    constructor(readonly id: string, readonly title: string, readonly icon: Icon) {
        this.comments = [];
    }
    
    comments: QuestComment[];
}

export interface QuestComment {
    id: string | undefined;
    description: string;
    user: string;
    timestamp: number;
}

export interface QuestCommentNew {
    description: string;
}