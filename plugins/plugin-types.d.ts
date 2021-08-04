/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue';

export class Repositories {
    userRepo: any;
    blogRepo: any;
    projectRepo: any;
}

declare module 'vue/types/vue' {
    interface Vue {
        $repositories: Repositories;
    }
}
