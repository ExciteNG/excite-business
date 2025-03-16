/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface ParamsLinkProp {
	distributorid: string | string[];
	subdistributor: string | string[];
	subdistributorid: string | string[];
	retailer: string | string[];
}
export interface DisList {
	name: string;
	lastModified: string;
	location: string;
	category: string;
	performance: string;
	id: string;
}
export interface DashProps {
	width: number;
	title: string;
	matrix: number;
}

export interface TabLinkProps {
	tab: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	tabLink: string;
	category?: {
		tabLink1?: string;
		tabLink2?: string;
		tabLink3?: string;
	};
}

// export interface InventoryProps {
// 	batch: string;
// 	product: string;
// 	enterDate: string;
// 	unitPrice: string;
// 	quantity: string;
// 	performance: string;
// }

interface StoreInfo {
	storeName: string;
	storeAddress: string;
	storePhone: string;
	storeLga: string;
	storeState: string;
}

interface Referral {
	isReferred: boolean;
	refCode: string;
	count: number;
}

interface Identification {
	id: string;
	passport: string;
	idType: string;
	signature: string;
}

interface Location {
	address: string;
	lga: string;
	state: string;
	town: string;
}

interface RegStatus {
	isApproved: boolean;
	dateApproved: string;
	dateRegistered: string;
}

interface CellInfo {
	cell: string;
	cellGroup: string;
	isCellHead: boolean;
	isClusterHead: boolean;
	cluster: string;
}

interface AccountDetails {
	bank: string;
	accountNo: string;
	branch: string;
	bvn: string;
	accountName: string;
	paymentMode: string;
}

interface Company {
	name: string;
	address: string;
	rc: string;
	tin: string;
	nature: string;
	taxCert: string;
	cacCert: string;
}

interface Earnings {
	amount: number;
	email: string;
	package: string;
	cycle: string;
	commission: number;
}

export interface IDistributor {
	_id: string;
	storeInfo: StoreInfo;
	storeSlug: string;
	subscriptionLevel: number;
	subscriptionStart: number;
	subscriptionEnd: number;
	AryshareProfileKey: string;
	referral: Referral;
	email: string;
	password: string;
	userType: string;
	image: any[];
	emailVerified: boolean;
	identification: Identification;
	phone: string;
	fullname: string;
	username: string;
	location: Location;
	regStatus: RegStatus;
	affiliateCode: string;
	affiliateCount: number;
	partnerCode: string;
	cellInfo: CellInfo;
	accountDetails: AccountDetails;
	company: Company;
	walletCreated: boolean;
	earnings: Earnings[];
	cycle: number;
	plan: string;
	price: number;
	otp: number;
	verified: boolean;
	refBy: string;
	refCode: string;
	verifyToken: string;
	netBalance: number;
	incomeTotal: number;
	expenseTotal: number;
	costOfSaleTotal: number;
	creditTotal: number;
	debitTotal: number;
	inventoryCost: number;
	product: string[];
	customers: string[];
	payment: string[];
	transactions: string[];
	ongoingCampaigns: number;
	completedCampaigns: number;
	pendingCampaigns: number;
	declinedCampaigns: number;
	createdAt: Date;
	updatedAt: Date;
	resetPasswordToken: string;
	resetPasswordExpires: number;
	syncWebToken: number;
	syncWebTokenExpires: Date;
	isArchived: boolean;
	archivedAt: Date;
}

export interface Inventory {
	product: string & DistributorProduct;
	productName: string;
	quantity: number;
	quantitySold: number;
	oldStockQuantity: number;
	currentBatch: {
		id: string;
		number: string;
	};
	oldStockBatch: {
		id: string;
		number: string;
		quantity: number;
	}[];
	price: number;
	distributor: string;
	entryDate: string;
	exitDate: string;
}

export interface DistributorProduct {
	productName: string;
	quantity: number;
	price: number;
	distributor: string | IDistributor;
}

export interface InventoryProps {
	Product: string;
	EntryD: string;
	BatchID: string;
	QuantityS: number;
	UnitP: number;
	// AmountS: number;
	quantityS: number;
	// AmountSold: number;
	QuantityR: number;
	// remainingA: number;
}

export interface RewardProps {
	platinum: {
		name: string;
		location: string;
		rank: string;
		performance: string;
	}[];
	diamond: {
		name: string;
		location: string;
		rank: string;
		performance: string;
	}[];
	gold: {
		name: string;
		location: string;
		rank: string;
		performance: string;
	}[];
	incentive: {
		name: string;
		location: string;
		rank: string;
		performance: string;
	}[];
	intervention: {
		name: string;
		location: string;
		rank: string;
		performance: string;
	}[];
}
