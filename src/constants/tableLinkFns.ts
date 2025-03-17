import { DisList } from "@/types/dashboard";
import { ParamsLinkProp } from "@/types/dashboard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const pathNavFn = (list: DisList, params4Link: ParamsLinkProp, path:string, router:AppRouterInstance) => {
    const { distributorid, subdistributor, subdistributorid, retailer } = params4Link;
    const host = window.location.host;
    const baseLink = `http://${host}${path}/distribution`;

    if (path.startsWith('/super-agent')) {
        
      if (distributorid !== undefined && retailer === undefined) { 
          console.log('here')
          return router.push(
            `${path}/${list.id}`
          );
        } else if (subdistributor !== undefined && retailer !== undefined) {
          return router.push(
            `${path}/${list.id}`
          );
        }
    }
    else if (path.startsWith('/main-agent')) {
      
      if (subdistributorid !== undefined && retailer !== undefined) {
        return router.push(
          `${baseLink}/${subdistributorid}/${retailer}/${list.id}`  //This link needs a little refining.
        );
      }
    }
    
    return router.push(`${baseLink}/${list.id}`);
};

