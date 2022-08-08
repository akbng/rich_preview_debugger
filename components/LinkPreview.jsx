const LinkPreview = ({ metaData }) => {
  return (
    <>
      {Object.keys(metaData).length > 0 ? (
        <a
          href={metaData["og:url"]}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md h-32 flex rounded bg-gray-100"
        >
          {metaData["og:image"] && (
            <img
              className="w-2/5 h-full object-cover rounded-l"
              src={metaData["og:image"]}
              alt="opengraph preview"
            />
          )}
          <div className="w-3/5 p-4">
            {metaData["og:title"] && (
              <h1 className="text-lg line-clamp-2 leading-tight text-gray-800">
                {metaData["og:title"]}
              </h1>
            )}
            {metaData["og:description"] && (
              <p className="my-1 text-sm line-clamp-2 leading-tight text-gray-800">
                {metaData["og:description"]}
              </p>
            )}
            {metaData["og:site_name"] && (
              <p className="text-xs text-gray-600">
                {metaData["og:site_name"]}
              </p>
            )}
          </div>
        </a>
      ) : (
        <h1 className="text-gray-200 text-lg">
          Can not scrape meta data of this url
        </h1>
      )}
    </>
  );
};

export default LinkPreview;
