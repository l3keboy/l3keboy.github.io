// Import types
import ILink from "./ILink";

export default interface ICertificate {
  company: string;
  companyIcon: string;
  certificateName: string;
  grantDate: string;
  expiryDate: string | null;
  certificateNumber: number | string;
  certificateUrl: ILink;
  skills: string[];
}
