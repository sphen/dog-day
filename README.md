```bash
dog day
```

# A statically generated starter template using Next.js and Contentful

This template showcases Next.js's [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching) feature using [Contentful](https://www.contentful.com/) as the data source.

## Example

An example blog using this starter can be found here:

### [dog day example](https://neu-hikers.vercel.app/)

## Quick Start

### Step 1. Create an account and a space on Contentful

First, [create an account on Contentful](https://www.contentful.com/sign-up/).

After creating an account, create a new empty **space** from the [dashboard](https://app.contentful.com/) and assign to it any name of your liking.

### Step 2. Create a content model

The [content model](https://www.contentful.com/developers/docs/concepts/data-model/) defines the data structures of your application/websites. The structures are flexible and you can tailor them to your needs. To get started with this example you need to create a content model that defines a single content type named 'Article'.

##### Create an `Article` type

From your contentful space, go to **Content model** and add another content type:

- Give it the **Name** `Article`, the **Api Identifier** should be `article`

Next, add these fields (you don't have to modify the settings unless specified):

- `title` - **Text** field (type **short text**)
- `content` - **Rich text** field
- `excerpt` - **Text** field (type **Long text, full-text search**)
- `thumbnail` - **Media** field (type **one file**)
- `featuredImage` - **Date and time** field
- `slug` - **Text** field (type **Short text**). Go to the settings of this field, and under **Appearance**, select **Slug** to display it as a slug of the `title` field. Go to the **Validation** tab, select **Required field** and **Unique field**.

Save the content type and continue.

### Step 3. Validate your content model

After setting up the content model (either manually or by running `npm run setup` or `yarn setup`).

### Step 4. Populate Content

Go to the **Content** section in your space, then click on **Add entry**.

**Important:** For each entry and asset, you need to click on **Publish**. If not, the entry will be in draft state.

### Step 5. Set up environment variables

From your contentful space, go to **Settings > API keys**. There will be an example Content delivery / preview token - you can use these API keys. (You may also create a new key.)

Set each variable in `.env.local`:

- `CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API Key
- `CONTENTFUL_ACCESS_TOKEN` should be the **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) - access token** field of your API key

Your `.env.local` file should look like this:

```bash
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
```

### Step 6. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your site should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, [open an issue](https://github.com/sphen/dog-day/issues).

### Step 7. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and import to Vercel.

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.
