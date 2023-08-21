// Dependencies
import { Link } from "react-router-dom";

// Geonorge WebComponents
// eslint-disable-next-line no-unused-vars
import { GnBreadcrumbList } from "@kartverket/geonorge-web-components";

function shouldRenderBreadcrumbUrl(breadcrumb) {
    const activeHash = `${window.location.hash}`;
    const activePath = `${window.location.pathname}${window.location.hash}${window.location.search}`;
    const activeHref = window.location.href;
    const isActiveHash = activeHash.toLowerCase() === breadcrumb.url.toLowerCase();
    const isActivePath = activePath.toLowerCase() === breadcrumb.url.toLowerCase();
    const isActiveHref = activeHref.toLowerCase() === breadcrumb.url.toLowerCase();
    return !!breadcrumb?.url?.length && !isActiveHash && !isActivePath && !isActiveHref;
}

export function renderBreadcrumbs(breadcrumbs) {
    const listItems = breadcrumbs.map((breadcrumb, index) => {
        const key = `${index}-${breadcrumb.name}`;
        if (shouldRenderBreadcrumbUrl(breadcrumb)) {
            return (
                <li key={key}>
                    <Link to={breadcrumb.url}>{breadcrumb.name}</Link>
                </li>
            );
        } else {
            return <li key={key}>{breadcrumb.name}</li>;
        }
    });
    return (
        <gn-breadcrumb-list>
            <ul>{listItems}</ul>
        </gn-breadcrumb-list>
    );
}
