class FootDiabService {
    gangrene = false
    abces = false
    fievre = false
    sris = false

    insuffisanceCardiac = false
    insuffisanceRen = false
    insolmentSoc = false
    troublePsy = false
    
    absPouls = false
    infection = false
    /*
        risque d'infection :
    */
   gonflement = false
   erythemePeriph = false
   sensibiliteDouleurLoc = false
   chaleur = false
   secretionsPurulent = false
   autreCauseInflamation = false        
   infectionCounts = 0

    necrose = false
    miseANuDesOsTendons = false


    dim25SurfPlaie = false
    bourgeonement = false
    epithelialisation = false

    constructor() { }

    static mode = {
        CLASSIC: 'classic',
        REEVAL: 'reeval'
    }

    reset(newMode) {

        this.newMode = newMode

        // Etat de la plaie
        this.gangrene = false
        this.abces = false
        this.fievre = false
        this.sris = false

        // terrain
        this.insuffisanceCardiac = false
        this.insuffisanceRen = false
        this.insolmentSoc = false
        this.troublePsy = false

        // clinique
        this.absPouls = false
        this.infection = false
        this.necrose = false
        this.miseANuDesOsTendons = false

        this.gonflement = false
        this.erythemePeriph = false
        this.sensibiliteDouleurLoc = false
        this.chaleur = false
        this.secretionsPurulent = false
        this.autreCauseInflamation = false    
        this.infectionCounts = 0

        //Reeval
        this.dim25SurfPlaie = false
        this.bourgeonement = false
        this.epithelialisation = false
    }

    isInfected() {
        if (this.autreCauseInflamation == false && this.infectionCounts >= 2) {
            return true
        }
        return false
    }

    getDiagnosticState() {
        if (this.newMode == FootDiabService.mode.CLASSIC) {
            if (this.isUrgenceAbs()) {
                return 3
            } else {
                if (this.isFootDiabComplicated()) {
                    return 2
                }
            }
            return 1
        } else {
            if (this.isReevalOk()) {
                return 1
            } else {
                return 2
            }
        }
    }

    isReevalOk() {
        if (this.dim25SurfPlaie && (this.bourgeonement || this.epithelialisation)) {
            return true
        }
        return false
    }

    isFootDiabComplicated() {
        if (this.insuffisanceCardiac ||
            this.insuffisanceRen ||
            this.insolmentSoc ||
            this.troublePsy ||
    
            this.absPouls ||
            this.infection  ||
            this.necrose  ||
            this.miseANuDesOsTendons) {
                return true
            }
            return false
    }

    isUrgenceAbs() {
        if (this.gangrene || this.abces || this.fievre || this.sris) {
            return true
        }
        return false
    }
};

export default FootDiabService;