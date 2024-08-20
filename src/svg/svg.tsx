import * as react from "react";
import { RefAttributes, SVGProps } from "react";


type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface CustomIconProps extends ElementAttributes {
 size?: string | number;
 absoluteStrokeWidth?: boolean;
}

import BootStrap from '../../public/bootstrap.svg'
import Css from '../../public/css3.svg'
import Html from '../../public/html.svg'
import Js from '../../public/javascript.svg'
import Next from '../../public/next.svg'
// import React from '../../public/react.svg'
import Tailwind from '../../public/tailwind.svg'
import Typescript from '../../public/typescript.svg'
import Vercel from '../../public/vercel.svg'
import mongodb from '../../public/mongodb.svg'
import nodejs from '../../public/node.svg'
import express from '../../public/express.svg'
import graphql from '../../public/graphql.svg'
import php from '../../public/php.svg'
import mysql from '../../public/mysql.svg'
import postgresql from '../../public/postgresql.svg'
import java from '../../public/java.svg'
import git from '../../public/git.svg'
import figma from '../../public/figma.svg'



const BootStrapIcon: react.ForwardRefExoticComponent<Omit<CustomIconProps, "ref"> & react.RefAttributes<SVGSVGElement>> = react.forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
 <svg {...props} ref={ref}>
     <use xlinkHref={`#${BootStrap.id}`} />
 </svg>
));

const CssIcon: react.ForwardRefExoticComponent<Omit<CustomIconProps, "ref"> & react.RefAttributes<SVGSVGElement>> = react.forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
 <svg {...props} ref={ref}>
     <use xlinkHref={`#${Css.id}`} />
 </svg>
));

const HtmlIcon: react.ForwardRefExoticComponent<Omit<CustomIconProps, "ref"> & react.RefAttributes<SVGSVGElement>> = react.forwardRef<SVGSVGElement, CustomIconProps>((props, ref) => (
 <svg {...props} ref={ref}>
     <use xlinkHref={`#${Html.id}`} />
 </svg>
));


export { BootStrapIcon, CssIcon, HtmlIcon };