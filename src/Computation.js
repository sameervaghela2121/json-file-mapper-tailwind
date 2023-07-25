import React, { useEffect, useState } from 'react'

const Computation = (jsonData) => {
    console.log("jsonData", jsonData)
    const [data, setData] = useState(jsonData.jsonData);
    // useEffect(() => {
    //     setData(jsonData.jsonData);
    // }, [jsonData])

    const renderKeys = () => {
        console.log("renderKeys data", data)
        if (Object.keys(data).length !== 0 && Object.keys(data?.ITR).length > 0) {
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
                                <div>{itr1Data['Refund'].BankAccountDtls.AddtnlBankDetails[0].BankName}{" "}
                                    {itr1Data['Refund'].BankAccountDtls.AddtnlBankDetails[0].BankAccountNo}{" "}
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
        if (Object.keys(data).length !== 0) {
            console.log("Data 789 sam", data)
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



    if (Object.keys(data).length !== 0) {
        return (
            <div className="w-full p-[50px]">
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
}

export default Computation