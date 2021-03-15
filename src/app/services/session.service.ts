import { Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
    providedIn: "root"
})

export class SessionService {

    active(): boolean {
        const trainer = localStorage.getItem("trainer-name")
        return Boolean(trainer)
    }
}