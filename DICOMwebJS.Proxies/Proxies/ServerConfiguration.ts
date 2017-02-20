module DICOMwebJS {
    export module ServerConfiguration {
        export var BaseServerUrl: string;
        export var WadoUriPart: string = "api/wadouri";
        export var WadoRsPart : string = "wadors";
        export var StowPart: string = "stowrs";
        export var QidoPart: string = "qidors";
        export var DelowRsPart: string = "delowrs";

        export var IncludeAuthorizationHeader: boolean = false;
        export var SecurityToken: string = "";

        export function getWadoUriUrl(): string {
           return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.WadoUriPart;
        }

        export function getWadoRsUrl(): string {
           return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.WadoRsPart;
        }

        export function getStowUrl(): string {
           return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.StowPart;
        }

        export function getQidoUrl(): string {
           return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.QidoPart;
        }

        export function getDelowRsUrl(): string {
           return DICOMwebJS.ServerConfiguration.BaseServerUrl + DICOMwebJS.ServerConfiguration.DelowRsPart;
        }
    }
}