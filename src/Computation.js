import React, { useEffect, useState } from 'react'

const Computation = (jsonData) => {
    // const [data, setData] = useState([]);
    // console.log("data", data)
    useEffect(() => {
        console.log("Hi")
        // setData(jsonData.jsonData.ITR.ITR1);
    }, [jsonData])
    let data = {
        "ITR": {
            "ITR1": {
                "CreationInfo": {
                    "SWVersionNo": "R1",
                    "SWCreatedBy": "SW10112324",
                    "JSONCreatedBy": "SW10112324",
                    "JSONCreationDate": "2023-06-26",
                    "Digest": "PokbrSYsml2b8P6ziRMBY35XXy4tK+yBrFWKEWLZAnQ=",
                    "IntermediaryCity": "Delhi"
                },
                "Form_ITR1": {
                    "FormName": "ITR-1",
                    "Description": "For Indls having Income from Salary, Pension, family pension and Interest",
                    "AssessmentYear": "2023",
                    "SchemaVer": "Ver1.0",
                    "FormVer": "Ver1.0"
                },
                "PersonalInfo": {
                    "AssesseeName": {
                        "FirstName": "SRIKANTA",
                        "SurNameOrOrgName": "BERA"
                    },
                    "Address": {
                        "ResidenceNo": "13B S/O BHANU CHARAN BERA",
                        "ResidenceName": "AADARSH COLONY",
                        "LocalityOrArea": "Amthala",
                        "CityOrTownOrDistrict": "SIROHI",
                        "StateCode": "27",
                        "CountryCode": "91",
                        "PinCode": 307510,
                        "CountryCodeMobile": 91,
                        "MobileNo": 9982282489,
                        "EmailAddress": "kiranbamani@gmail.com"
                    },
                    "PAN": "BBVPB6415P",
                    "DOB": "1980-01-12",
                    "EmployerCategory": "PSU",
                    "AadhaarCardNo": "276514887344"
                },
                "FilingStatus": {
                    "ReturnFileSec": 11,
                    "NewTaxRegime": "N",
                    "SeventhProvisio139": "N",
                    "IncrExpAggAmt2LkTrvFrgnCntryFlg": "N",
                    "IncrExpAggAmt1LkElctrctyPrYrFlg": "N",
                    "clauseiv7provisio139i": "N"
                },
                "ITR1_IncomeDeductions": {
                    "AllwncExemptUs10": {
                        "AllwncExemptUs10Dtls": [
                            {
                                "SalNatureDesc": "10(13A)",
                                "SalOthAmount": 46170
                            }
                        ],
                        "TotalAllwncExemptUs10": 46170
                    },
                    "OthersInc": {
                        "OthersIncDtlsOthSrc": [
                            {
                                "OthSrcNatureDesc": "IFD",
                                "OthSrcOthAmount": 1363
                            },
                            {
                                "OthSrcNatureDesc": "SAV",
                                "OthSrcOthAmount": 1027
                            }
                        ]
                    },
                    "UsrDeductUndChapVIA": {
                        "Section80C": 150000,
                        "Section80CCC": 0,
                        "Section80CCDEmployeeOrSE": 0,
                        "Section80CCD1B": 50000,
                        "Section80CCDEmployer": 0,
                        "Section80D": 46952,
                        "Section80DD": 0,
                        "Section80DDB": 0,
                        "Section80E": 0,
                        "Section80EE": 0,
                        "Section80GG": 0,
                        "Section80GGA": 0,
                        "Section80GGC": 30000,
                        "Section80U": 0,
                        "Section80TTA": 1027,
                        "Section80TTB": 0,
                        "TotalChapVIADeductions": 277979,
                        "Section80G": 0
                    },
                    "DeductUndChapVIA": {
                        "Section80C": 150000,
                        "Section80CCC": 0,
                        "Section80CCDEmployeeOrSE": 0,
                        "Section80CCD1B": 50000,
                        "Section80CCDEmployer": 0,
                        "Section80D": 46952,
                        "Section80DD": 0,
                        "Section80DDB": 0,
                        "Section80E": 0,
                        "Section80EE": 0,
                        "Section80EEA": 0,
                        "Section80EEB": 0,
                        "Section80G": 0,
                        "Section80GG": 0,
                        "Section80GGA": 0,
                        "Section80GGC": 30000,
                        "Section80U": 0,
                        "Section80TTA": 1027,
                        "Section80TTB": 0,
                        "AnyOthSec80CCH": 0,
                        "TotalChapVIADeductions": 277979
                    },
                    "ExemptIncAgriOthUs10": {
                        "ExemptIncAgriOthUs10Total": 0
                    },
                    "GrossSalary": 881679,
                    "Salary": 881679,
                    "PerquisitesValue": 0,
                    "ProfitsInSalary": 0,
                    "IncomeNotified89A": 0,
                    "NetSalary": 835509,
                    "DeductionUs16": 50000,
                    "DeductionUs16ia": 50000,
                    "EntertainmentAlw16ii": 0,
                    "ProfessionalTaxUs16iii": 0,
                    "IncomeFromSal": 785509,
                    "TypeOfHP": "S",
                    "AnnualValue": 0,
                    "StandardDeduction": 0,
                    "InterestPayable": 43488,
                    "TotalIncomeOfHP": -43488,
                    "IncomeOthSrc": 2390,
                    "DeductionUs57iia": 0,
                    "Increliefus89AOS": 0,
                    "GrossTotIncome": 744411,
                    "TotalIncome": 466430
                },
                "ITR1_TaxComputation": {
                    "IntrstPay": {
                        "IntrstPayUs234A": 0,
                        "IntrstPayUs234B": 0,
                        "IntrstPayUs234C": 0,
                        "LateFilingFee234F": 0
                    },
                    "TotalTaxPayable": 10822,
                    "Rebate87A": 10822,
                    "TaxPayableOnRebate": 0,
                    "EducationCess": 0,
                    "GrossTaxLiability": 0,
                    "Section89": 0,
                    "NetTaxLiability": 0,
                    "TotalIntrstPay": 0,
                    "TotTaxPlusIntrstPay": 0
                },
                "TaxPaid": {
                    "TaxesPaid": {
                        "AdvanceTax": 0,
                        "TDS": 18215,
                        "TCS": 0,
                        "SelfAssessmentTax": 0,
                        "TotalTaxesPaid": 18215
                    },
                    "BalTaxPayable": 0
                },
                "Refund": {
                    "BankAccountDtls": {
                        "AddtnlBankDetails": [
                            {
                                "IFSCCode": "PUNB0000200",
                                "BankName": "PUNJAB NATIONAL BANK",
                                "BankAccountNo": "0002000400176989",
                                "UseForRefund": "true"
                            }
                        ]
                    },
                    "RefundDue": 18220
                },
                "Schedule80G": {
                    "Don100Percent": {
                        "TotDon100PercentCash": 0,
                        "TotDon100PercentOtherMode": 0,
                        "TotDon100Percent": 0,
                        "TotEligibleDon100Percent": 0
                    },
                    "Don50PercentNoApprReqd": {
                        "TotDon50PercentNoApprReqdCash": 0,
                        "TotDon50PercentNoApprReqdOtherMode": 0,
                        "TotDon50PercentNoApprReqd": 0,
                        "TotEligibleDon50Percent": 0
                    },
                    "Don100PercentApprReqd": {
                        "TotDon100PercentApprReqdCash": 0,
                        "TotDon100PercentApprReqdOtherMode": 0,
                        "TotDon100PercentApprReqd": 0,
                        "TotEligibleDon100PercentApprReqd": 0
                    },
                    "Don50PercentApprReqd": {
                        "TotDon50PercentApprReqdCash": 0,
                        "TotDon50PercentApprReqdOtherMode": 0,
                        "TotDon50PercentApprReqd": 0,
                        "TotEligibleDon50PercentApprReqd": 0
                    },
                    "TotalDonationsUs80GCash": 0,
                    "TotalDonationsUs80GOtherMode": 0,
                    "TotalDonationsUs80G": 0,
                    "TotalEligibleDonationsUs80G": 0
                },
                "Schedule80GGA": {
                    "TotalDonationAmtCash80GGA": 0,
                    "TotalDonationAmtOtherMode80GGA": 0,
                    "TotalDonationsUs80GGA": 0,
                    "TotalEligibleDonationAmt80GGA": 0
                },
                "Schedule80D": {
                    "Sec80DSelfFamSrCtznHealth": {
                        "SeniorCitizenFlag": "N",
                        "SelfAndFamily": 21952,
                        "HealthInsPremSlfFam": 16952,
                        "PrevHlthChckUpSlfFam": 5000,
                        "SelfAndFamilySeniorCitizen": 0,
                        "ParentsSeniorCitizenFlag": "Y",
                        "Parents": 0,
                        "ParentsSeniorCitizen": 25000,
                        "MedicalExpParentsSrCtzn": 25000,
                        "EligibleAmountOfDedn": 46952
                    }
                },
                "TDSonSalaries": {
                    "TDSonSalary": [
                        {
                            "EmployerOrDeductorOrCollectDetl": {
                                "TAN": "JDHM06250G",
                                "EmployerOrDeductorOrCollecterName": "MODERN INSULATORS LTD."
                            },
                            "IncChrgSal": 881679,
                            "TotalTDSSal": 18215
                        }
                    ],
                    "TotalTDSonSalaries": 18215
                },
                "TDSonOthThanSals": {
                    "TotalTDSonOthThanSals": 0
                },
                "ScheduleTDS3Dtls": {
                    "TotalTDS3Details": 0
                },
                "ScheduleTCS": {
                    "TotalSchTCS": 0
                },
                "TaxPayments": {
                    "TotalTaxPayments": 0
                },
                "Verification": {
                    "Declaration": {
                        "AssesseeVerName": "SRIKANTA BERA",
                        "FatherName": "BHANU CHARAN BERA",
                        "AssesseeVerPAN": "BBVPB6415P"
                    },
                    "Capacity": "S",
                    "Place": "157.38.134.199"
                }
            }
        }
    };

    const renderKeys = () => {
        if (data) {
            // Extract the "ITR1" object from the JSON data
            const itr1Data = data.ITR.ITR1;

            const itr1Keys = Object.keys(itr1Data);

            return itr1Keys.map((key) => {
                console.log("s", key, itr1Data[key])
                if (key === 'PersonalInfo') {
                    return (
                        <>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">NAME:</div>
                                <div>{itr1Data[key].AssesseeName.FirstName} {itr1Data[key].AssesseeName.SurNameOrOrgName}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">FATHER NAME:</div>
                                <div>{itr1Data['Verification'].Declaration.FatherName}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">PAN NO:</div>
                                <div>{itr1Data[key].PAN}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">ADDRESS:</div>
                                <div>{itr1Data[key].Address.ResidenceNo} {itr1Data[key].Address.ResidenceName}
                                    {itr1Data[key].Address.LocalityOrArea} {itr1Data[key].Address.CityOrTownOrDistrict}
                                    {itr1Data[key].Address.PinCode}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">STATUS:</div>
                                <div>INDIVIDUAL</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">PREVIOUS YEAR:</div>
                                <div>{parseInt(itr1Data['Form_ITR1'].AssessmentYear) - 1}-{itr1Data['Form_ITR1'].AssessmentYear}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">ASSESSMENT YEAR:</div>
                                <div>{itr1Data['Form_ITR1'].AssessmentYear}-{parseInt(itr1Data['Form_ITR1'].AssessmentYear) + 1}</div>
                            </div>
                            <div class="upperFields flex justify-between">
                                <div class="keyClass">BANK A/C NO:</div>
                                <div>{itr1Data['Refund'].BankAccountDtls.AddtnlBankDetails[0].BankName}
                                    {itr1Data['Refund'].BankAccountDtls.AddtnlBankDetails[0].BankAccountNo}
                                    {itr1Data['Refund'].BankAccountDtls.AddtnlBankDetails[0].IFSCCode}</div>
                            </div>
                            <hr class="border-2 border" />
                        </>

                    )
                }
            });
        }

        return <div>No JSON data loaded.</div>;
    };
    const renderIcome = () => {
        let totalIncomeFromOtherSource = 0;
        if (data) {
            // Extract the "ITR1" object from the JSON data
            const itr1Data = data.ITR.ITR1;

            const itr1Keys = Object.keys(itr1Data);
            let UsrDeductUndChapVIA = itr1Data.ITR1_IncomeDeductions.UsrDeductUndChapVIA;
            let keysOfUsrDeductUndChapVIA = Object.keys(UsrDeductUndChapVIA);
            let totalOfUsrDeductUndChapVIA = 0;
            keysOfUsrDeductUndChapVIA.forEach((eachKey) => {
                totalOfUsrDeductUndChapVIA = totalOfUsrDeductUndChapVIA + UsrDeductUndChapVIA[eachKey];
                // console.log("KeysOfUsrDeductUndChapVIA", UsrDeductUndChapVIA[eachKey])
                console.log("totalOfUsrDeductUndChapVIA", totalOfUsrDeductUndChapVIA)
            })
            // console.log("KeysOfUsrDeductUndChapVIA", keysOfUsrDeductUndChapVIA)

            return itr1Keys.map((key) => {
                if (key === 'ITR1_IncomeDeductions') {
                    console.log("789 ITR1_IncomeDeductions", key, itr1Data[key])
                    return (
                        <>
                            {itr1Data[key].GrossSalary !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">INCOME FROM SALARY:</div>
                                <div>{itr1Data[key].GrossSalary}</div>
                            </div>}
                            {
                                itr1Data[key].AllwncExemptUs10.AllwncExemptUs10Dtls.length > 0 &&
                                itr1Data[key].AllwncExemptUs10.AllwncExemptUs10Dtls.map((each) => {
                                    return (<div class="upperFields flex justify-between">
                                        <div class="keyClass">{each.SalNatureDesc}</div>
                                        <div>{each.SalOthAmount}</div>
                                    </div>)
                                })

                            }
                            {itr1Data[key].GrossSalary !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">LESS: STANDARD DEDUCTION:</div>
                                <div>{itr1Data[key].DeductionUs16}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div>{itr1Data[key].IncomeFromSal}</div>
                            </div>}
                            <br />
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">LOAN INTEREST</div>
                                <div>{itr1Data[key].InterestPayable}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div>{itr1Data[key].IncomeFromSal - itr1Data[key].InterestPayable}</div>
                            </div>}
                            <br />
                            <div>
                                2. INCOME FROM OTHER SOURSES
                            </div>
                            {
                                itr1Data[key].OthersInc.OthersIncDtlsOthSrc.length > 0 &&
                                itr1Data[key].OthersInc.OthersIncDtlsOthSrc.map((each, index) => {
                                    totalIncomeFromOtherSource = totalIncomeFromOtherSource + each.OthSrcOthAmount;
                                    return (<div class="upperFields flex justify-between m-2">
                                        <div class="keyClass">{index + 1}: {each.OthSrcNatureDesc}</div>
                                        <div>{each.OthSrcOthAmount}</div>
                                    </div>)
                                })

                            }
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div>{totalIncomeFromOtherSource}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"></div>
                                <div>{itr1Data[key].GrossTotIncome}</div>
                            </div>}
                            <br />
                            <br />
                            {itr1Data[key].UsrDeductUndChapVIA.Section80C !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">LESS: DEDUCTION 80C </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80C}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80CCC !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">80CCC </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80CCC}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80CCDEmployer !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80CCDEmployer </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80CCDEmployer}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80TTA !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">80TTA (Interest From Saving Bank Account.) </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80TTA}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80CCD1B !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">80CCD(1B) (Investment Rs. 50000/-)  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80CCD1B}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80D !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">80D HEALTH INSURANCE PREMIUM CHECKUP  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80D}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80GGC !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">80GGC - Donation to Political party  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80GGC}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80DD !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80DD  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80DD}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80DDB !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80DDB  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80DDB}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80E !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80E  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80E}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80EE !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80EE  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80EE}</div>
                            </div>}
                            {console.log("456", itr1Data[key].UsrDeductUndChapVIA.Section80EEA)}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80EEA && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80EEA  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80EEA}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80EEB && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80EEB  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80EEB}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80GG !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80GG  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80GG}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80GGA !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80GGA  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80GGA}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80U !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80U  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80U}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.Section80TTB !== 0 && <div class="upperFields flex justify-between">
                                <div class="keyClass">Section80TTB  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80TTB}</div>
                            </div>}
                            {itr1Data[key].UsrDeductUndChapVIA.AnyOthSec80CCH && <div class="upperFields flex justify-between">
                                <div class="keyClass">AnyOthSec80CCH  </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.AnyOthSec80CCH}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">80G </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.Section80G}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div>{itr1Data[key].UsrDeductUndChapVIA.TotalChapVIADeductions}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">GROSS TOTAL INCOME</div>
                                <div>{itr1Data[key].GrossTotIncome - itr1Data[key].UsrDeductUndChapVIA.TotalChapVIADeductions}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">ROUND OFF</div>
                                <div>{itr1Data[key].TotalIncome}</div>
                            </div>}
                            <br />
                            <br />
                            <br />
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">TAX on {itr1Data[key].TotalIncome}.00</div>
                                <div>{itr1Data['ITR1_TaxComputation'].TotalTaxPayable}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">LESS : REBATE U/S 87 A</div>
                                <div>{itr1Data['ITR1_TaxComputation'].Rebate87A}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass">TAX PAYABLE</div>
                                <div>{itr1Data['TaxPaid'].BalTaxPayable}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            {itr1Data['Refund'].RefundDue && <div class="upperFields flex justify-between">
                                <div class="keyClass">REFUND</div>
                                <div>{itr1Data['Refund'].RefundDue}</div>
                            </div>}
                            {<div class="upperFields flex justify-between">
                                <div class="keyClass"> </div>
                                <div><hr class="border-2 border w-[100px]" /></div>
                            </div>}
                            <br />
                        </>

                    )
                }
            });
        }

        return <div>No JSON data loaded.</div>;
    };




    return (
        <div className="w-full">
            {
                renderKeys()
            }
            <div class="text-center font-bold text-xl m-2">
                COMPUTATION OF TOTAL INCOME
            </div>
            {
                renderIcome()
            }
        </div >
    )
}

export default Computation