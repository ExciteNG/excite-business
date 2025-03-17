import React from "react";
// import { useParams } from "next/navigation";
// import { distributorList } from "@/lib/dummyData";
// import FullInventoryDash from "@/components/dashboard/shared/FullInventoryDash";
// import { useReactQuery } from "@/services/apiHelper";
import FullInventoryDashNew from "@/components/dashboard/shared/FullInventoryDashNew";
// import { IDistributor } from "@/types/dashboard";

const Page = () => {
	return (
		<section className="p-5">
			{/* <FullInventoryDash
        perDistributor={thisDistributor}
        id={distributorId}
        inventory={280}
        sales={143}
      /> */}
			<FullInventoryDashNew />
		</section>
	);
};

export default Page;
