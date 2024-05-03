import fetch from 'cross-fetch';

export interface ExoAPIOptions {
    apiKey?: string;
    coreUrl?: string;
}

export class ExoAPI {
    options: ExoAPIOptions = { coreUrl: 'https://api.exoapi.dev' };

    constructor(options: ExoAPIOptions = {}) {
        this.options = { ...this.options, ...options };
    }

    /**
     * Generate high-quality PDF documents or images from HTML
     */
    async htmlRenderer(params: {
        html: string;
        format?: 'pdf' | 'png';
        title?: string;
        imageWidth?: number;
        imageHeight?: number;
        pageSize?:
            | 'letter'
            | 'legal'
            | 'tabloid'
            | 'ledger'
            | 'a0'
            | 'a1'
            | 'a2'
            | 'a3'
            | 'a4'
            | 'a5'
            | 'a6';
        pageWidth?: string;
        pageHeight?: string;
        margin?: string;
        marginLeft?: string;
        marginRight?: string;
        marginTop?: string;
        marginBottom?: string;
        landscape?: boolean;
        css?: string;
        header?: string;
        footer?: string;
    }): Promise<Blob> {
        const res = await fetch('https://api.exoapi.dev/html-renderer', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.options.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (res.status >= 400) {
            throw await res.json();
        }
        return await res.blob();
    }

    /**
     * Quickly convert between all different kinds of measurement units
     */
    async unitConverter(params: {
        from:
            | 'm/s2'
            | "'"
            | "''"
            | 'deg'
            | 'gon'
            | 'rad'
            | 'rad/s'
            | '[acr_us]'
            | '[sft_i]'
            | '[sin_i]'
            | '[smi_us]'
            | '[syd_i]'
            | 'ar'
            | 'cm2'
            | 'har'
            | 'km2'
            | 'm2'
            | 'mm2'
            | 'AUD'
            | 'BGN'
            | 'BRL'
            | 'CAD'
            | 'CHF'
            | 'CNY'
            | 'CZK'
            | 'DKK'
            | 'EUR'
            | 'GBP'
            | 'HKD'
            | 'HUF'
            | 'IDR'
            | 'ILS'
            | 'INR'
            | 'ISK'
            | 'JPY'
            | 'KRW'
            | 'MXN'
            | 'MYR'
            | 'NOK'
            | 'NZD'
            | 'PHP'
            | 'PLN'
            | 'RON'
            | 'SEK'
            | 'SGD'
            | 'THB'
            | 'TRY'
            | 'USD'
            | 'ZAR'
            | 'F'
            | 'C'
            | 'S'
            | 'A'
            | 'V'
            | 'Ohm'
            | '[Btu_IT]'
            | 'J'
            | 'kW.h'
            | 'MJ'
            | 'kW.h/100km'
            | 'm/J'
            | 'W.h/km'
            | 'N'
            | '%'
            | 'bpm'
            | 'Hz'
            | 'rpm'
            | '[mi_i]/[gal_br]'
            | 'L/100km'
            | 'm/m3'
            | 'lx'
            | 'H'
            | '[ft_i]'
            | '[in_i]'
            | '[mi_i]'
            | '[nmi_i]'
            | '[yd_i]'
            | 'cm'
            | 'dm'
            | 'km'
            | 'm'
            | 'mm'
            | 'g/km'
            | 'kg/m'
            | 'lm'
            | 'Wb'
            | 'T'
            | '[lb_av]'
            | 'g'
            | 'kg'
            | 't'
            | '[HP_e]'
            | '[HP_m]'
            | '[HP_s]'
            | '[HP]'
            | 'kW'
            | 'W'
            | 'Pa'
            | 'Bq'
            | '[kn_i]'
            | 'km/h'
            | 'm/s'
            | '[degF]'
            | 'Cel'
            | 'K'
            | 'a'
            | 'd'
            | 'h'
            | 'min'
            | 'mo'
            | 's'
            | 'wk'
            | 'N.m'
            | '[gal_br]'
            | '[pk_br]'
            | 'L'
            | 'm3';
        to:
            | 'm/s2'
            | "'"
            | "''"
            | 'deg'
            | 'gon'
            | 'rad'
            | 'rad/s'
            | '[acr_us]'
            | '[sft_i]'
            | '[sin_i]'
            | '[smi_us]'
            | '[syd_i]'
            | 'ar'
            | 'cm2'
            | 'har'
            | 'km2'
            | 'm2'
            | 'mm2'
            | 'AUD'
            | 'BGN'
            | 'BRL'
            | 'CAD'
            | 'CHF'
            | 'CNY'
            | 'CZK'
            | 'DKK'
            | 'EUR'
            | 'GBP'
            | 'HKD'
            | 'HUF'
            | 'IDR'
            | 'ILS'
            | 'INR'
            | 'ISK'
            | 'JPY'
            | 'KRW'
            | 'MXN'
            | 'MYR'
            | 'NOK'
            | 'NZD'
            | 'PHP'
            | 'PLN'
            | 'RON'
            | 'SEK'
            | 'SGD'
            | 'THB'
            | 'TRY'
            | 'USD'
            | 'ZAR'
            | 'F'
            | 'C'
            | 'S'
            | 'A'
            | 'V'
            | 'Ohm'
            | '[Btu_IT]'
            | 'J'
            | 'kW.h'
            | 'MJ'
            | 'kW.h/100km'
            | 'm/J'
            | 'W.h/km'
            | 'N'
            | '%'
            | 'bpm'
            | 'Hz'
            | 'rpm'
            | '[mi_i]/[gal_br]'
            | 'L/100km'
            | 'm/m3'
            | 'lx'
            | 'H'
            | '[ft_i]'
            | '[in_i]'
            | '[mi_i]'
            | '[nmi_i]'
            | '[yd_i]'
            | 'cm'
            | 'dm'
            | 'km'
            | 'm'
            | 'mm'
            | 'g/km'
            | 'kg/m'
            | 'lm'
            | 'Wb'
            | 'T'
            | '[lb_av]'
            | 'g'
            | 'kg'
            | 't'
            | '[HP_e]'
            | '[HP_m]'
            | '[HP_s]'
            | '[HP]'
            | 'kW'
            | 'W'
            | 'Pa'
            | 'Bq'
            | '[kn_i]'
            | 'km/h'
            | 'm/s'
            | '[degF]'
            | 'Cel'
            | 'K'
            | 'a'
            | 'd'
            | 'h'
            | 'min'
            | 'mo'
            | 's'
            | 'wk'
            | 'N.m'
            | '[gal_br]'
            | '[pk_br]'
            | 'L'
            | 'm3';
        value: number;
    }): Promise<{
        type?:
            | 'acceleration'
            | 'angle'
            | 'angularVelocity'
            | 'area'
            | 'currency'
            | 'electricCapacitance'
            | 'electricCharge'
            | 'electricConductance'
            | 'electricCurrent'
            | 'electricPotential'
            | 'electricResistance'
            | 'energy'
            | 'energyEfficiency'
            | 'force'
            | 'fraction'
            | 'frequency'
            | 'fuelEfficiency'
            | 'illuminance'
            | 'inductance'
            | 'length'
            | 'linearMassDensity'
            | 'luminousFlux'
            | 'magneticFlux'
            | 'magneticFluxDensity'
            | 'mass'
            | 'power'
            | 'pressure'
            | 'radioactivity'
            | 'speed'
            | 'temperature'
            | 'time'
            | 'torque'
            | 'volume';
        from?:
            | 'm/s2'
            | "'"
            | "''"
            | 'deg'
            | 'gon'
            | 'rad'
            | 'rad/s'
            | '[acr_us]'
            | '[sft_i]'
            | '[sin_i]'
            | '[smi_us]'
            | '[syd_i]'
            | 'ar'
            | 'cm2'
            | 'har'
            | 'km2'
            | 'm2'
            | 'mm2'
            | 'AUD'
            | 'BGN'
            | 'BRL'
            | 'CAD'
            | 'CHF'
            | 'CNY'
            | 'CZK'
            | 'DKK'
            | 'EUR'
            | 'GBP'
            | 'HKD'
            | 'HUF'
            | 'IDR'
            | 'ILS'
            | 'INR'
            | 'ISK'
            | 'JPY'
            | 'KRW'
            | 'MXN'
            | 'MYR'
            | 'NOK'
            | 'NZD'
            | 'PHP'
            | 'PLN'
            | 'RON'
            | 'SEK'
            | 'SGD'
            | 'THB'
            | 'TRY'
            | 'USD'
            | 'ZAR'
            | 'F'
            | 'C'
            | 'S'
            | 'A'
            | 'V'
            | 'Ohm'
            | '[Btu_IT]'
            | 'J'
            | 'kW.h'
            | 'MJ'
            | 'kW.h/100km'
            | 'm/J'
            | 'W.h/km'
            | 'N'
            | '%'
            | 'bpm'
            | 'Hz'
            | 'rpm'
            | '[mi_i]/[gal_br]'
            | 'L/100km'
            | 'm/m3'
            | 'lx'
            | 'H'
            | '[ft_i]'
            | '[in_i]'
            | '[mi_i]'
            | '[nmi_i]'
            | '[yd_i]'
            | 'cm'
            | 'dm'
            | 'km'
            | 'm'
            | 'mm'
            | 'g/km'
            | 'kg/m'
            | 'lm'
            | 'Wb'
            | 'T'
            | '[lb_av]'
            | 'g'
            | 'kg'
            | 't'
            | '[HP_e]'
            | '[HP_m]'
            | '[HP_s]'
            | '[HP]'
            | 'kW'
            | 'W'
            | 'Pa'
            | 'Bq'
            | '[kn_i]'
            | 'km/h'
            | 'm/s'
            | '[degF]'
            | 'Cel'
            | 'K'
            | 'a'
            | 'd'
            | 'h'
            | 'min'
            | 'mo'
            | 's'
            | 'wk'
            | 'N.m'
            | '[gal_br]'
            | '[pk_br]'
            | 'L'
            | 'm3';
        to?:
            | 'm/s2'
            | "'"
            | "''"
            | 'deg'
            | 'gon'
            | 'rad'
            | 'rad/s'
            | '[acr_us]'
            | '[sft_i]'
            | '[sin_i]'
            | '[smi_us]'
            | '[syd_i]'
            | 'ar'
            | 'cm2'
            | 'har'
            | 'km2'
            | 'm2'
            | 'mm2'
            | 'AUD'
            | 'BGN'
            | 'BRL'
            | 'CAD'
            | 'CHF'
            | 'CNY'
            | 'CZK'
            | 'DKK'
            | 'EUR'
            | 'GBP'
            | 'HKD'
            | 'HUF'
            | 'IDR'
            | 'ILS'
            | 'INR'
            | 'ISK'
            | 'JPY'
            | 'KRW'
            | 'MXN'
            | 'MYR'
            | 'NOK'
            | 'NZD'
            | 'PHP'
            | 'PLN'
            | 'RON'
            | 'SEK'
            | 'SGD'
            | 'THB'
            | 'TRY'
            | 'USD'
            | 'ZAR'
            | 'F'
            | 'C'
            | 'S'
            | 'A'
            | 'V'
            | 'Ohm'
            | '[Btu_IT]'
            | 'J'
            | 'kW.h'
            | 'MJ'
            | 'kW.h/100km'
            | 'm/J'
            | 'W.h/km'
            | 'N'
            | '%'
            | 'bpm'
            | 'Hz'
            | 'rpm'
            | '[mi_i]/[gal_br]'
            | 'L/100km'
            | 'm/m3'
            | 'lx'
            | 'H'
            | '[ft_i]'
            | '[in_i]'
            | '[mi_i]'
            | '[nmi_i]'
            | '[yd_i]'
            | 'cm'
            | 'dm'
            | 'km'
            | 'm'
            | 'mm'
            | 'g/km'
            | 'kg/m'
            | 'lm'
            | 'Wb'
            | 'T'
            | '[lb_av]'
            | 'g'
            | 'kg'
            | 't'
            | '[HP_e]'
            | '[HP_m]'
            | '[HP_s]'
            | '[HP]'
            | 'kW'
            | 'W'
            | 'Pa'
            | 'Bq'
            | '[kn_i]'
            | 'km/h'
            | 'm/s'
            | '[degF]'
            | 'Cel'
            | 'K'
            | 'a'
            | 'd'
            | 'h'
            | 'min'
            | 'mo'
            | 's'
            | 'wk'
            | 'N.m'
            | '[gal_br]'
            | '[pk_br]'
            | 'L'
            | 'm3';
        value?: number;
        result?: number;
    }> {
        const res = await fetch('https://api.exoapi.dev/unit-converter', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.options.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (res.status >= 400) {
            throw await res.json();
        }
        return await res.json();
    }

    /**
     * Generate high quality QR code & barcode images in a matter of seconds
     */
    async barcodeGenerator(params: {
        type:
            | 'auspost'
            | 'azteccode'
            | 'azteccodecompact'
            | 'aztecrune'
            | 'bc412'
            | 'channelcode'
            | 'codablockf'
            | 'code11'
            | 'code128'
            | 'code16k'
            | 'code2of5'
            | 'code32'
            | 'code39'
            | 'code39ext'
            | 'code49'
            | 'code93'
            | 'code93ext'
            | 'codeone'
            | 'coop2of5'
            | 'daft'
            | 'databarexpanded'
            | 'databarexpandedcomposite'
            | 'databarexpandedstacked'
            | 'databarexpandedstackedcomposite'
            | 'databarlimited'
            | 'databarlimitedcomposite'
            | 'databaromni'
            | 'databaromnicomposite'
            | 'databarstacked'
            | 'databarstackedcomposite'
            | 'databarstackedomni'
            | 'databarstackedomnicomposite'
            | 'databartruncated'
            | 'databartruncatedcomposite'
            | 'datalogic2of5'
            | 'datamatrix'
            | 'datamatrixrectangular'
            | 'datamatrixrectangularextension'
            | 'dotcode'
            | 'ean13'
            | 'ean13composite'
            | 'ean14'
            | 'ean2'
            | 'ean5'
            | 'ean8'
            | 'ean8composite'
            | 'flattermarken'
            | 'gs1-128'
            | 'gs1-128composite'
            | 'gs1-cc'
            | 'gs1datamatrix'
            | 'gs1datamatrixrectangular'
            | 'gs1northamericancoupon'
            | 'gs1qrcode'
            | 'hanxin'
            | 'hibcazteccode'
            | 'hibccodablockf'
            | 'hibccode128'
            | 'hibccode39'
            | 'hibcdatamatrix'
            | 'hibcdatamatrixrectangular'
            | 'hibcmicropdf417'
            | 'hibcpdf417'
            | 'hibcqrcode'
            | 'iata2of5'
            | 'identcode'
            | 'industrial2of5'
            | 'interleaved2of5'
            | 'isbn'
            | 'ismn'
            | 'issn'
            | 'itf14'
            | 'japanpost'
            | 'kix'
            | 'leitcode'
            | 'mailmark'
            | 'matrix2of5'
            | 'maxicode'
            | 'micropdf417'
            | 'microqrcode'
            | 'msi'
            | 'onecode'
            | 'pdf417'
            | 'pdf417compact'
            | 'pharmacode'
            | 'pharmacode2'
            | 'planet'
            | 'plessey'
            | 'posicode'
            | 'postnet'
            | 'pzn'
            | 'qrcode'
            | 'rationalizedCodabar'
            | 'raw'
            | 'royalmail'
            | 'sscc18'
            | 'symbol'
            | 'telepen'
            | 'telepennumeric'
            | 'ultracode'
            | 'upca'
            | 'upcacomposite'
            | 'upce'
            | 'upcecomposite';
        value: string;
        format?: 'png' | 'svg';
        width?: number;
        height?: number;
        showText?: boolean;
        fitWidth?: boolean;
        foregroundColor?: string;
        backgroundColor?: string;
    }): Promise<Blob> {
        const res = await fetch('https://api.exoapi.dev/barcode-generator', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.options.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (res.status >= 400) {
            throw await res.json();
        }
        return await res.blob();
    }

    /**
     * Effortlessly convert GPS coordinates to human-readable addresses
     */
    async reverseGeocoding(params: {
        lat: number;
        lon: number;
        locale?: string;
    }): Promise<{
        lat?: number;
        lon?: number;
        address?: string;
        houseNumber?: string;
        street?: string;
        postalCode?: string;
        city?: string;
        region?: string;
        regionCode?: string;
        country?: string;
        countryCode?: string;
        countryCode3?: string;
        currency?: string;
    }> {
        const res = await fetch('https://api.exoapi.dev/reverse-geocoding', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.options.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (res.status >= 400) {
            throw await res.json();
        }
        return await res.json();
    }

    /**
     * Automatically detect unwanted content and enforce your moderation rules
     */
    async contentModeration(params: { text: string }): Promise<{
        safetyScore?: number;
        reason?: string;
        hateSpeechScore?: number;
        dangerousContentScore?: number;
        harassmentScore?: number;
        sexuallyExplicitScore?: number;
    }> {
        const res = await fetch('https://api.exoapi.dev/content-moderation', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.options.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (res.status >= 400) {
            throw await res.json();
        }
        return await res.json();
    }
}
