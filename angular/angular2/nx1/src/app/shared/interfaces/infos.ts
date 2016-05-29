export interface UserInfo extends InfoBase {
    /** First name of the user. */
    FirstName: string;
    /** Infix of the user's name. */
    Infix: string;
    /** Last name of the user. */
    LastName: string;
    /** Gender of the user. */
    Gender: Gender;
    /** The primary e-mail address of the user. */
    Email: string;
    /** Primary phone of the user. */
    Phone: string;
    /** CultureId of the user. */
    CultureId: number;
    /** Address of the user. */
    Address: AddressInfo;
    /** RootFolderId of the user. */
    RootFolderId: number;
    /** ImageId of the user. */
    ImageId: number;
}

export interface InfoBase {
    /** Identifier of the objects. */
    Id: number;
    /** Unique identifier of the object. */
    Guid: any;
    /** Creation date of the object. */
    CreatedDate: Date;
    /** Identifier of the user who created the object. */
    CreatedById: number;
    /** Modification date of the object. */
    ModifiedDate: Date;
    /** Identifier of the user who modified the object. */
    ModifiedById: number;
    /** Version of the object. */
    Version: any[];
}

export const enum Gender {
    /** Other gender. */
    Other = 0,
    /** Male gender. */
    Male = 1,
    /** Female gender. */
    Female = 2,
}

export interface AddressInfo extends InfoBase {
    /** CountryId of the Address. */
    CountryId: number;
    /** City of the AddressInfo. */
    City: string;
    /** StreetAddress of the Address. */
    StreetAddress: string;
    /** PostAddress of the Address. */
    Postcode: string;
}