import React from 'react';

const CurrencyList = props => {
    return (
        <select name={props.origem} className='form-control' onChange={props.onValueChange}>
            <option value='AED' title='United Arab Emirates Dirham'>United Arab Emirates Dirham</option>
            <option value='AFN' title='Afghan Afghani'>Afghan Afghani</option>
            <option value='ALL' title='Albanian Lek'>Albanian Lek</option>
            <option value='AMD' title='Armenian Dram'>Armenian Dram</option>
            <option value='ANG' title='Netherlands Antillean Guilder'>Netherlands Antillean Guilder</option>
            <option value='AOA' title='Angolan Kwanza'>Angolan Kwanza</option>
            <option value='ARS' title='Argentine Peso'>Argentine Peso</option>
            <option value='AUD' title='Australian Dollar'>Australian Dollar</option>
            <option value='AWG' title='Aruban Florin'>Aruban Florin</option>
            <option value='AZN' title='Azerbaijani Manat'>Azerbaijani Manat</option>
            <option value='BAM' title='Bosnia-Herzegovina Convertible Mark'>Bosnia-Herzegovina Convertible Mark</option>
            <option value='BBD' title='Barbadian Dollar'>Barbadian Dollar</option>
            <option value='BDT' title='Bangladeshi Taka'>Bangladeshi Taka</option>
            <option value='BGN' title='Bulgarian Lev'>Bulgarian Lev</option>
            <option value='BHD' title='Bahraini Dinar'>Bahraini Dinar</option>
            <option value='BIF' title='Burundian Franc'>Burundian Franc</option>
            <option value='BMD' title='Bermudan Dollar'>Bermudan Dollar</option>
            <option value='BND' title='Brunei Dollar'>Brunei Dollar</option>
            <option value='BOB' title='Bolivian Boliviano'>Bolivian Boliviano</option>
            <option value='BRL' title='Brazilian Real'>Brazilian Real</option>
            <option value='BSD' title='Bahamian Dollar'>Bahamian Dollar</option>
            <option value='BTC' title='Bitcoin'>Bitcoin</option>
            <option value='BTN' title='Bhutanese Ngultrum'>Bhutanese Ngultrum</option>
            <option value='BWP' title='Botswanan Pula'>Botswanan Pula</option>
            <option value='BYN' title='Belarusian Ruble'>Belarusian Ruble</option>
            <option value='BYR' title='Belarusian Ruble'>Belarusian Ruble</option>
            <option value='BZD' title='Belize Dollar'>Belize Dollar</option>
            <option value='CAD' title='Canadian Dollar'>Canadian Dollar</option>
            <option value='CDF' title='Congolese Franc'>Congolese Franc</option>
            <option value='CHF' title='Swiss Franc'>Swiss Franc</option>
            <option value='CLF' title='Chilean Unit of Account (UF)'>Chilean Unit of Account (UF)</option>
            <option value='CLP' title='Chilean Peso'>Chilean Peso</option>
            <option value='CNY' title='Chinese Yuan'>Chinese Yuan</option>
            <option value='COP' title='Colombian Peso'>Colombian Peso</option>
            <option value='CRC' title='Costa Rican Colón'>Costa Rican Colón</option>
            <option value='CUC' title='Cuba Convertible Peso'>Cuba Convertible Peso</option>
            <option value='CUP' title='Cuban Peso'>Cuban Peso</option>
            <option value='CVE' title='Cape Verdean Escudo'>Cape Verdean Escudo</option>
            <option value='CZK' title='Czech Republic Koruna'>Czech Republic Koruna</option>
            <option value='DJF' title='Djiboutian Franc'>Djiboutian Franc</option>
            <option value='DKK' title='Danish Krone'>Danish Krone</option>
            <option value='DOP' title='Dominican Peso'>Dominican Peso</option>
            <option value='DZD' title='Algerian Dinar'>Algerian Dinar</option>
            <option value='EEK' title='Estonian Kroon'>Estonian Kroon</option>
            <option value='EGP' title='Egyptian Pound'>Egyptian Pound</option>
            <option value='ERN' title='Eritrean Nakfa'>Eritrean Nakfa</option>
            <option value='ETB' title='Ethiopian Birr'>Ethiopian Birr</option>
            <option value='EUR' title='Euro'>Euro</option>
            <option value='FJD' title='Fijian Dollar'>Fijian Dollar</option>
            <option value='FKP' title='Falkland Islands Pound'>Falkland Islands Pound</option>
            <option value='GBP' title='British Pound Sterling'>British Pound Sterling</option>
            <option value='GEL' title='Georgian Lari'>Georgian Lari</option>
            <option value='GGP' title='Guernsey Pound'>Guernsey Pound</option>
            <option value='GHS' title='Ghanaian Cedi'>Ghanaian Cedi</option>
            <option value='GIP' title='Gibraltar Pound'>Gibraltar Pound</option>
            <option value='GMD' title='Gambian Dalasi'>Gambian Dalasi</option>
            <option value='GNF' title='Guinean Franc'>Guinean Franc</option>
            <option value='GTQ' title='Guatemalan Quetzal'>Guatemalan Quetzal</option>
            <option value='GYD' title='Guyanaese Dollar'>Guyanaese Dollar</option>
            <option value='HKD' title='Hong Kong Dollar'>Hong Kong Dollar</option>
            <option value='HNL' title='Honduran Lempira'>Honduran Lempira</option>
            <option value='HRK' title='Croatian Kuna'>Croatian Kuna</option>
            <option value='HTG' title='Haitian Gourde'>Haitian Gourde</option>
            <option value='HUF' title='Hungarian Forint'>Hungarian Forint</option>
            <option value='IDR' title='Indonesian Rupiah'>Indonesian Rupiah</option>
            <option value='ILS' title='Israeli New Sheqel'>Israeli New Sheqel</option>
            <option value='IMP' title='Manx pound'>Manx pound</option>
            <option value='INR' title='Indian Rupee'>Indian Rupee</option>
            <option value='IQD' title='Iraqi Dinar'>Iraqi Dinar</option>
            <option value='IRR' title='Iranian Rial'>Iranian Rial</option>
            <option value='ISK' title='Icelandic Króna'>Icelandic Króna</option>
            <option value='JEP' title='Jersey Pound'>Jersey Pound</option>
            <option value='JMD' title='Jamaican Dollar'>Jamaican Dollar</option>
            <option value='JOD' title='Jordanian Dinar'>Jordanian Dinar</option>
            <option value='JPY' title='Japanese Yen'>Japanese Yen</option>
            <option value='KES' title='Kenyan Shilling'>Kenyan Shilling</option>
            <option value='KGS' title='Kyrgystani Som'>Kyrgystani Som</option>
            <option value='KHR' title='Cambodian Riel'>Cambodian Riel</option>
            <option value='KMF' title='Comorian Franc'>Comorian Franc</option>
            <option value='KPW' title='North Korean Won'>North Korean Won</option>
            <option value='KRW' title='South Korean Won'>South Korean Won</option>
            <option value='KWD' title='Kuwaiti Dinar'>Kuwaiti Dinar</option>
            <option value='KYD' title='Cayman Islands Dollar'>Cayman Islands Dollar</option>
            <option value='KZT' title='Kazakhstani Tenge'>Kazakhstani Tenge</option>
            <option value='LAK' title='Laotian Kip'>Laotian Kip</option>
            <option value='LBP' title='Lebanese Pound'>Lebanese Pound</option>
            <option value='LKR' title='Sri Lankan Rupee'>Sri Lankan Rupee</option>
            <option value='LRD' title='Liberian Dollar'>Liberian Dollar</option>
            <option value='LSL' title='Lesotho Loti'>Lesotho Loti</option>
            <option value='LTL' title='Lithuanian Litas'>Lithuanian Litas</option>
            <option value='LVL' title='Latvian Lats'>Latvian Lats</option>
            <option value='LYD' title='Libyan Dinar'>Libyan Dinar</option>
            <option value='MAD' title='Moroccan Dirham'>Moroccan Dirham</option>
            <option value='MDL' title='Moldovan Leu'>Moldovan Leu</option>
            <option value='MGA' title='Malagasy Ariary'>Malagasy Ariary</option>
            <option value='MKD' title='Macedonian Denar'>Macedonian Denar</option>
            <option value='MMK' title='Myanma Kyat'>Myanma Kyat</option>
            <option value='MNT' title='Mongolian Tugrik'>Mongolian Tugrik</option>
            <option value='MOP' title='Macanese Pataca'>Macanese Pataca</option>
            <option value='MRO' title='Mauritanian Ouguiya'>Mauritanian Ouguiya</option>
            <option value='MUR' title='Mauritian Rupee'>Mauritian Rupee</option>
            <option value='MVR' title='Maldivian Rufiyaa'>Maldivian Rufiyaa</option>
            <option value='MWK' title='Malawian Kwacha'>Malawian Kwacha</option>
            <option value='MXN' title='Mexican Peso'>Mexican Peso</option>
            <option value='MYR' title='Malaysian Ringgit'>Malaysian Ringgit</option>
            <option value='MZN' title='Mozambican Metical'>Mozambican Metical</option>
            <option value='NAD' title='Namibian Dollar'>Namibian Dollar</option>
            <option value='NGN' title='Nigerian Naira'>Nigerian Naira</option>
            <option value='NIO' title='Nicaraguan Córdoba'>Nicaraguan Córdoba</option>
            <option value='NOK' title='Norwegian Krone'>Norwegian Krone</option>
            <option value='NPR' title='Nepalese Rupee'>Nepalese Rupee</option>
            <option value='NZD' title='New Zealand Dollar'>New Zealand Dollar</option>
            <option value='OMR' title='Omani Rial'>Omani Rial</option>
            <option value='PAB' title='Panamanian Balboa'>Panamanian Balboa</option>
            <option value='PEN' title='Peruvian Nuevo Sol'>Peruvian Nuevo Sol</option>
            <option value='PGK' title='Papua New Guinean Kina'>Papua New Guinean Kina</option>
            <option value='PHP' title='Philippine Peso'>Philippine Peso</option>
            <option value='PKR' title='Pakistani Rupee'>Pakistani Rupee</option>
            <option value='PLN' title='Polish Zloty'>Polish Zloty</option>
            <option value='PYG' title='Paraguayan Guarani'>Paraguayan Guarani</option>
            <option value='QAR' title='Qatari Rial'>Qatari Rial</option>
            <option value='RON' title='Romanian Leu'>Romanian Leu</option>
            <option value='RSD' title='Serbian Dinar'>Serbian Dinar</option>
            <option value='RUB' title='Russian Ruble'>Russian Ruble</option>
            <option value='RWF' title='Rwandan Franc'>Rwandan Franc</option>
            <option value='SAR' title='Saudi Riyal'>Saudi Riyal</option>
            <option value='SBD' title='Solomon Islands Dollar'>Solomon Islands Dollar</option>
            <option value='SCR' title='Seychellois Rupee'>Seychellois Rupee</option>
            <option value='SDG' title='Sudanese Pound'>Sudanese Pound</option>
            <option value='SEK' title='Swedish Krona'>Swedish Krona</option>
            <option value='SGD' title='Singapore Dollar'>Singapore Dollar</option>
            <option value='SHP' title='Saint Helena Pound'>Saint Helena Pound</option>
            <option value='SLL' title='Sierra Leonean Leone'>Sierra Leonean Leone</option>
            <option value='SOS' title='Somali Shilling'>Somali Shilling</option>
            <option value='SRD' title='Surinamese Dollar'>Surinamese Dollar</option>
            <option value='STD' title='São Tomé and Príncipe Dobra'>São Tomé and Príncipe Dobra</option>
            <option value='SVC' title='Salvadoran Colón'>Salvadoran Colón</option>
            <option value='SYP' title='Syrian Pound'>Syrian Pound</option>
            <option value='SZL' title='Swazi Lilangeni'>Swazi Lilangeni</option>
            <option value='THB' title='Thai Baht'>Thai Baht</option>
            <option value='TJS' title='Tajikistani Somoni'>Tajikistani Somoni</option>
            <option value='TMT' title='Turkmenistani Manat'>Turkmenistani Manat</option>
            <option value='TND' title='Tunisian Dinar'>Tunisian Dinar</option>
            <option value='TOP' title='Tongan Pa?anga'>Tongan Pa?anga</option>
            <option value='TRY' title='Turkish Lira'>Turkish Lira</option>
            <option value='TTD' title='Trinidad and Tobago Dollar'>Trinidad and Tobago Dollar</option>
            <option value='TWD' title='New Taiwan Dollar'>New Taiwan Dollar</option>
            <option value='TZS' title='Tanzanian Shilling'>Tanzanian Shilling</option>
            <option value='UAH' title='Ukrainian Hryvnia'>Ukrainian Hryvnia</option>
            <option value='UGX' title='Ugandan Shilling'>Ugandan Shilling</option>
            <option value='USD' title='United States Dollar'>United States Dollar</option>
            <option value='UYU' title='Uruguayan Peso'>Uruguayan Peso</option>
            <option value='UZS' title='Uzbekistan Som'>Uzbekistan Som</option>
            <option value='VEF' title='Venezuelan Bolívar'>Venezuelan Bolívar</option>
            <option value='VND' title='Vietnamese Dong'>Vietnamese Dong</option>
            <option value='VUV' title='Vanuatu Vatu'>Vanuatu Vatu</option>
            <option value='WST' title='Samoan Tala'>Samoan Tala</option>
            <option value='XAF' title='CFA Franc BEAC'>CFA Franc BEAC</option>
            <option value='XAG' title='Silver (troy ounce)'>Silver (troy ounce)</option>
            <option value='XAU' title='Gold (troy ounce)'>Gold (troy ounce)</option>
            <option value='XCD' title='East Caribbean Dollar'>East Caribbean Dollar</option>
            <option value='XDR' title='Special Drawing Rights'>Special Drawing Rights</option>
            <option value='XOF' title='CFA Franc BCEAO'>CFA Franc BCEAO</option>
            <option value='XPF' title='CFP Franc'>CFP Franc</option>
            <option value='YER' title='Yemeni Rial'>Yemeni Rial</option>
            <option value='ZAR' title='South African Rand'>South African Rand</option>
            <option value='ZMK' title='Zambian Kwacha (pre-2013)'>Zambian Kwacha (pre-2013)</option>
            <option value='ZMW' title='Zambian Kwacha'>Zambian Kwacha</option>
            <option value='ZWL' title='Zimbabwean Dollar'>Zimbabwean Dollar</option>
        </select>
    )
}

export default CurrencyList;