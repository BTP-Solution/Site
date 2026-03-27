export function buildOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BTP Solution',
        url: 'https://erp-web.example.com',
        logo: 'https://erp-web.example.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-401-555-1212',
            contactType: 'customer service',
        },
    };
}

export function buildLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'BTP Solution',
        image: 'https://erp-web.example.com/office.jpg',
        '@id': 'https://erp-web.example.com',
        url: 'https://erp-web.example.com',
        telephone: '+1-401-555-1212',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Business St',
            addressLocality: 'Tech City',
            postalCode: '12345',
            addressCountry: 'US',
        },
    };
}
