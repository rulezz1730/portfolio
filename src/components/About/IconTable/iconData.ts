import {ReactComponent as JSLogo} from '../../../common/images/tecnhicalIcons/js.svg'
import {ReactComponent as ReactLogo} from '../../../common/images/tecnhicalIcons/react.svg'
import {ReactComponent as ReduxLogo} from '../../../common/images/tecnhicalIcons/redux.svg';
import {ReactComponent as TSLogo} from '../../../common/images/tecnhicalIcons/ts.svg';
import {ReactComponent as HTMLLogo} from '../../../common/images/tecnhicalIcons/HTML.svg';
import {ReactComponent as CSSLogo} from '../../../common/images/tecnhicalIcons/CSS.svg';
import * as React from 'react';


export const iconsData: Array<iconDataType>  = [
    {component: JSLogo, rotate: false, id: 'js'},
    {component: TSLogo, rotate: false, id: 'ts'},
    {component: ReactLogo, rotate: true, id: 'react'},
    {component: ReduxLogo, rotate: true, id: 'redux'},
    {component: HTMLLogo, rotate: false, id: 'html'},
    {component: CSSLogo, rotate: false, id: 'css'},
]

export type iconDataType = {
    component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>,
    rotate: boolean,
    id: string,
}