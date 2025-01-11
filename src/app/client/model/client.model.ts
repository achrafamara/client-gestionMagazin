export class Client {
    public idClient    : number      =   0;
    public nom         : string      =   '';
    public email       : string      =   '';
    public adresse     : string      =   '';
    public telephone   : string      =   '';

    constructor(
        public $_idClient  ?: number,
        public $_nom       ?: string,
        public $_email     ?: string,
        public $_adresse   ?: string,
        public $_telephone ?: string
    ) {
        if ($_idClient)    this.idClient    = $_idClient;
        if ($_nom)         this.nom          = $_nom;
        if ($_email)       this.email        = $_email;
        if ($_adresse)     this.adresse      = $_adresse;
        if ($_telephone)   this.telephone    = $_telephone;
    }

    public getIdClient(): number {
        return this.idClient;
    }

    public getNom(): string {
        return this.nom;
    }

    public getEmail(): string {
        return this.email;
    }

    public getAdresse(): string {
        return this.adresse;
    }

    public getTelephone(): string {
        return this.telephone;
    }

    public setIdClient($_idClient: number): void {
        this.idClient = $_idClient;
    }

    public setNom($_nom: string): void {
        this.nom = $_nom;
    }

    public setEmail($_email: string): void {
        this.email = $_email;
    }

    public setAdresse($_adresse: string): void {
        this.adresse = $_adresse;
    }

    public setTelephone($_telephone: string): void {
        this.telephone = $_telephone;
    }
}
