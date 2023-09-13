import React, { ReactNode } from 'react'; 

 type Props = {
    title: string;
    children: ReactNode;
}

function OverviewCardItem({children,title}: Props) {
    return ( 
        <div>
				<h2 className=''>{title}</h2>
{children}
        </div>
    )
}

export default OverviewCardItem;