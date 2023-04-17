import { createClient } from "@sanity/client";

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const DATASET = import.meta.env.VITE_DATASET

export default createClient({
    projectId: PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
    dataset: DATASET, // this is from those question during 'sanity init'
    useCdn: true,
});