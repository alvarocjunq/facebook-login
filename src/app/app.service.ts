import { Injectable } from "@angular/core";

declare const FB: any;

@Injectable()
export class AppService {
    pages: string[] = [];
    user: string;

    getInfo(userID) {
        console.log('oi')
        this.getPages(userID);
        this.getUser(userID);
    }

    getUser(userID) {
        FB.api(`/${userID}`, (response) => {
            if (response && !response.error) {
                this.user = response.name;
            }
        });
    }

    private getPages(userID) {
        FB.api(`/${userID}/likes`, (pages) => {
            if (pages && !pages.error) {
                pages.data.forEach(element => {
                    this.pages.push(element.name);
                });
            }
        });

    }
}
