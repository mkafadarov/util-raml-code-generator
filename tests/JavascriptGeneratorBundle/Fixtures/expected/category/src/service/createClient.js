import { createClient } from '@paysera/http-client-common';
import CategoryClient from './CategoryClient';

/**
 * @param {string} baseURL
 * @param {[]|null} middleware
 * @param {object} options
 *
 * @returns {CategoryClient}
 */
/* eslint import/prefer-default-export: ["off"] */
export const createCategoryClient = ({
    baseURL = 'https://my-api.example.com/rest/v1/',
    middleware = null,
    options = {}
}) => {
    const defaultUrlParameters = {};
    
    if (Object.prototype.hasOwnProperty.call(options, 'urlParameters')) {
        const { urlParameters } = options;
        for (let [key, value] of Object.entries(defaultUrlParameters)) {
            if (!Object.prototype.hasOwnProperty.call(urlParameters, key)) {
                urlParameters[key] = value;
            }
        }
        options.urlParameters = urlParameters;
    }

    return new CategoryClient(
        createClient({
            baseURL,
            middleware,
            options
        })
    )
};
