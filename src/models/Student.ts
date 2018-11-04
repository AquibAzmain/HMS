export class Student {
    public registrationNumber: number;
    public session: string;
    public name: string;
    public fathersName: string;
    public mothersName: string;
    public mobileNumber: string;
    public contactAddress: string;
    public permanentAddress: string;
    public nationality: string;
    public dateOfBirth: string;
    public religion: string;
    public gender: string;

    public legal_guardian_name:string;
    public legal_annual_income:number;
    public legal_relation_with_student:string;
    public legal_address:string;
    public legal_mobile_no:string;
    public legal_profession:string;
    public legal_monthly_income:number;
    
    public local_guardian_name:string;
    public local_annual_income:number;
    public local_relation_with_student:string;
    public local_address:string;
    public local_mobile_no:string;
    public local_profession:string;
    public local_monthly_income:number;

    public admissionExamMarks: string;
    public NID: string;
    public affiliatedSocietiesOrOrganizations: string;
    public sscInstitution: string;
    public sscGPA: number;
    public hscInstitution: string;
    public hscGPA: number;

    public residentialStatus: string;
    public expulsionStatus: boolean;
    public admissionFeesStatus: boolean;
    public residenceFeesStatus: boolean;
    public roomApprovalStatus: boolean;
    public alumni: boolean;
    public room_no: number;

    public subject_name: string;
    public class_year_semester: string;
    public roll: string;
    public cgpa: number;
    public unit: string;
}