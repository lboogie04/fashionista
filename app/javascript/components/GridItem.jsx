import * as React from "react";

const GridItem = () => {
    return (
        <div className="gridItem">
            <div className="innerGridItem">
                <div className="gridTopRow">
                    <div className="thumbnail">
                      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/91c7ad196034489.Y3JvcCwzMjMyLDI1MjgsMCww.png" class="e2e-UserSummary-coverImage UserSummary-ownerWorkThumbnailImage-JTU" loading="lazy" alt="Project thumbnail - Lannock"/>
                    </div>

                    <div className="thumbnail">
                      <img src="https://mir-s3-cdn-cf.behance.net/projects/115/a5fa59197921359.Y3JvcCwxMDA3LDc4OCwyMDQsMA.png" class="e2e-UserSummary-coverImage UserSummary-ownerWorkThumbnailImage-JTU" loading="lazy" alt="Project thumbnail - Lannock"/>
                    </div>

                    <div className="thumbnail">
                      <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/030496110860863.Y3JvcCwxNDAwLDEwOTUsMCwxOTQ.jpg" class="e2e-UserSummary-coverImage UserSummary-ownerWorkThumbnailImage-JTU" loading="lazy" alt="Project thumbnail - Lannock"/>
                    </div>

                </div>

                <div className="UserInfo">
                    <div className="UserInfo-Avatar">
                        <div className="UserInfo-ImageWrap">
                            <img src="https://mir-s3-cdn-cf.behance.net/user/115/8e476f199493.65f3771b78f7d.png" />
                        </div>

                    </div>
                    <div className="UserInfo-Data">
                        <div className="UserInfo-Name">Larry S</div>
                        <div className="UserInfo-Location">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4808 -20688 14.286 20" className="UserSummaryInfo-locationIcon"><g><path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path></g></svg>
                          <span>Houston, TX</span>
                        </div>
                        <div className="UserInfo-Available">
                          <button><span>Featured</span></button>
                        </div>
                        <div className="UserInfo-CollabButton">
                            <button>Collab with Larry 🤘</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GridItem;