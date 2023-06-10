import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from  './imports.js'

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div>
        <img src={ google } alt="google-img" />
      </div>

      <div>
        <img src={ slack } alt="slack-img" />
      </div>

      <div>
        <img src={ atlassian } alt="atlassian-img" />
      </div>

      <div>
        <img src={ dropbox } alt="atlassian-img" />
      </div>

      <div>
        <img src={ shopify } alt="shopify-img" />
      </div>
    </div>
  )
}

export default Brand
