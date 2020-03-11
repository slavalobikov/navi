
let initialState = {
    sidebar: [
        { id: 1, frAva:'https://navi.gg/upload/cc/38/u_59e720fd50bdc.jpg', frName: 'General' },
        { id: 2, frAva:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAKEBAKDRYbDQkJDRsIEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTMtMTUtQzBDIys9RD8uPzQ5QzcBCgoKDQ0OFQ8PFSsZFRkrKysrKzc3LisrNy0tKysrKy0yKzctKysrNysrNy03KysyKzcrLTctKy0rKysrKy0rLf/AABEIALgAuAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAIHAf/EADwQAAEDAgQEAwYDCAEFAQAAAAEAAgMEEQUSITEiQVFxBmGBEzJCUpGhI2KxFDNDcsHR8PFTFYKSouEH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACIRAAICAgMBAAMBAQAAAAAAAAABAhEDIRIxQQQiUWFxBf/aAAwDAQACEQMRAD8A3mERjKAA1g0aOSF1cheS1t+LomB7I3XLiNBsgUdY0Zi0DRxyoSkkQB78JbGCXDid9Uw+GWERG/P0QerxawzSNBvsGi6MeHJc0Rdtm5IQbbGD1Dt6omxDaIjL6og12ysYvaVYFyxgVhsBdYJzmQyuxqKN+TO3NzaDmIWPEMVeX+zZwDm82ug8+BROu7NJmJvmD7G/moyn4i0cfrGX9tuLtAsfiecxWKorXa3L+wIH2SzHhskL3Oje4sv+7cfaK81Ids5zH82O4wfqpMskbKl1zf8AF/8AMkILXVYb7wflB1c3i+qtlrSw2de/VuqzTztfvoT7sjNQe6y/pn/DFJKDxNLHA82lUsxJ7L2JPVrjqFTVwWN2mx59Ch0kpvY3B5O3t/cJ/wDBO+xjhxASD4QeiqqEumchwN+IfGOaKUtaJBY6OG4OipGfjJSh6iudYpVunWKVMIYZ9wvhIsvs+6pBSsZGiMD/ADRRfGg9CogEdJpS9uhIv6IPOcjmtBurcSmc793pcrCAQeK5NlLsgkfcRqSbBOPhEEQapFe+7gLc0/8AhoWht5KkexhjoWjKO6IMAQ2gOg7okQrGNDXgLNV1Isfy8trrPV1FhvzsAsc02Vtz3N/so5JeF8UPTJLTtJJfZznb6beSHvgLPcJ4RtfQrS+Rz7kXtsNd1U9zgLlpNviboVCzpUSiCuIdxXBG4OqNVVDHNGHsyggbtS9UFkmxbfp7jlngr5YHHUlvy/8Az+ywejnFKdzDleNOTtrILM50ZI3afev/AJ908UuIwVLcr7Bx+bVAMbwcs0vdh2O+VFMDjfQFkkDhpqPhcd290Jq5L3BBDm721V8znRktPL3cuuYeSz1GWQaEXA4XHn5J0TZR7QEdSPRVRzG976jmspkLXdtHDey5e6xvt1RFGGCozjXdcShCqOoLXAcnbX5FFXG4TxZKUaMM6yGoaw6rXUJfxNpzXRZkGW4s3YKIAwKLUY9onwxkbMxIJdsAlfK50jrDbkmyWohe0ezJLwNibqilw4glzgAXHkpp+EANS4cAMz7AlNOCwlkfdC6qga43z7fDeyM4aCI7HkE8ezILUJ0HdFSdEIojoFrrajJEXdGqjdDpWDKiTPLbkwn6oVjVZmkZC07nMbf+oWiGTKLn3nC58roBHUD2kk513DP0H2C427dnbFUqGejLRZgNxGLZup5pggomuGwSX4ZeZJNyQNz5r0OkaLcgANzohHZR6QBxDwyyTlZBpvBk4/dyXHyScYTjV41TxEgvbcIbL4xpG6GRo+6fiheTEqs8N1UeuT/uh1+yzx4vPDwStc5nySNT6PElO8DK9pDuiy1nsZBs036LOIUIeISU0ws27C75tMh8ilOtp3wuvYOYeceoXpWJeGY3glhDSeozBJWI0L4SWu90nduoWWgSQu1TMwzN3Ddx8QWKJxOnT1W6cGM8shN7s27rFVNsc7dB8TQmRJosa70IRukmDm36jUbWKXGusfIolhsmpCK0xXtGuqCFzgEaonVO5deawzM4SnZNAl+6i201M1xu4qI2YeMKxyMO1Hu80w0uMCR2UDRee1FI6MnqF3R4rJC4Ea9Rsksi1Y5+IICGZ2FwI3siuATF0AJ3sl2bxCySAg+8Rsj3h114AfJGHZkMNJ7oWXG6i4awa5jr2V9K7hCF4lLdzrfC3ujldItijbB1ZVFscrxvlNgNPIIRUD2cLR8jATzubf7V+LvswN5F7QfNU4gy7Q35i3TfoFzI6xp8C0tog4jV25RTGq17mljSAPyOsfVafD9NlhaPyqnE6A3JDTc82i5Ky0P2xQmw9rjxvOuzb3J7LDWYDGwEkzsB+LKQEWrsLqwT7MtiDhxTtPtp/rsOwS5Hg0/tAZppCAeJ3tTdUSb9Elp9Giipw33JMwHTRNWE00ju2nmgWGYW8yHW7P8Aldo716r0Dw3TZAQdr6XS7uh2kloWsaqXQtNz/ReeYtXzSk5bkX0G69I//SYfwXEaHMB0XmoY9gzBpcGmxzkt9QAmSdiS62CRTzi5cxxa7dp09QqXAgFpuQ3a+htzCMyYq8h2aIta3+I05rdwUNqng8WnpzWdpiKmgZKzLoDcfD5q+ledD8u64mbqR6tXNPv5EIiBaodcBfABZckXAXwdE6JsobHqbKLU1gbqea+oMHNfsYsXhNwfmQualBsbLRXYjna0Dcbql7iW6FBEkSOjBaT0Tz4cFqcdkj0ri1pBufunzw8PwB27KsTBiF9mX+UITWtyAk3vfiPmicR0H5NT35IPict5Gs311/X+ijmZ1YUB8QAc+NpJ9+5A52XUJ9pIPOTbsQqa534th8Dd+5XzCnfiM5hrwCfMqPhddnrGFABjey3uhB3WHCzwN7IhmTxM+wfVUDXbjfzQmTAGON7X7phcFyAnoybQOo8FYzkOwRamgAsANl9Y7kFzJiEcehIuei2gO2Lvj7DTLES3Ut1y9UgwUpLQQXbL0PHsVZlOvJJVDMC54G2ZBvYyTpWCavDcwNw035pVxOgMYNtgCvSZogljxFTjI7shYJIRy67Wu5hVjTUbA3HZWsbwkdFW4aepCJFheE3aPNVVJsLjkuaB122Pwr5VyWBVI9E5dmQ1RINyospXxNRF40xrji30VzQLXupVztbozUrLHm581O6BYep5oxHtxFNOCO/B02t3XnJlN8tjb6J/wV5MTALe7fQ/RMpDJWFXS5Wee556oA2S7nvNiGg+epWzFJ7DKDsNeSGB2WLmDJd2vTYLnm7Z2wjSMIb+9lNuJ9mje9lbhLPxSz5A0kjrv/Vc2zWaLhkY28+Z7qrDqkftDSCOJ13EagoDLs9Ywt3CESa5B8IfwtHluioKePQZdnbiqJH3Ngvr3KNsNfsnsXoxYg2fK4xWvlsOqSDhdQJTLLUVz3f8JPsWN9F6QH3G2qC41HofNLJDxl4eaY/WyWcGuaDm3eM4Vnh+UuJJFr2vbQEoni+EjQkb+izUEYYbJKozYWedEt+IXjK7+Uo6+UJT8TTcDvzaIrsEnoUibC3Vt/qVTPoPoV3UO4iPygWXEpu30T+kPDZQHfo7VU4gVbh527KnEQngJMxKKMGoC+qgg5ujaBe2q6pgx2+n2XZAOiodFbVRIhBkUe1r3PvJgwsZWk7D9AlenqTtbt5pkp32iIFrn3kG6RfFGzNXTknexedhvqqsQnGoA0BDW89Bufss0cl5S46iNxP0CpmlzAdcv68/oFBHYzqonyNEYN3v4pHDUN8ljwg5Sx22R418rm6rlfeVw+WIWt5LRg7LxPBtoTYqngnp6rhEvAOrf0Rb2iU/DtYDG0E6houj0c4QToo9m0v5oZiuLiFpdZziB7jBnKvnm0sEONibn6rcjUDXeKql4tFBKPmcWa/dYKrH52m7vbA8xIwgI5UVOTXQ26IDW44b2yuIHN2qZNMrHiCq/wAQSvILweHZgYQAq6DEhI6w0+6trKp0m4spC0Nb8I7BB14JOvC6aW10qeJZbljeb3I9PIlDFanPPbcRj/a0dslPoHvHGVW7a3mVa73z0uuSNfROSLsP5eSqrna9ei0UjbAlY6t2v+FPASZxALuC+LujF3hRMxBvlNybbLI+rLDZ2o6qqGu47EaHmrMQaCARrdJROtlkVU0kW3BCaGuGQW2sTf0ukVsRFrbud20TxTtvGPzNt9QkmjoxAeFxyvPRh17kKxrQ55A5OAH6KW/etI0I5fdWwR7H5sx0/wA5BRR0AoD8Z+o1Y63NFqFmSKXT4wB6rBHB+M8nZkduupsiNecrY2Cw4mX0vfy+icwUpCRlLSQWgeqPUeJcnaFCsPj0C2ywDdIygbhlDle2jza3/ql2POw6HRFKXFbWB0t10QT/AGYIf9HDhqUNqsDjGlrlEHYuLbhDajFBfdUXEGwbVYa1vogtU0NRbEMRB2OiWMTreQ1J5JXQGDsar/Zsc7mfcb5pYoxoXE3LjcndEMaBc3XmQssDAAByGrj1VI6RGXZzl1JVdtVfLsPzFVgcSNmNLBwoXUG7kWkbZtvJBpDqVWHRCXZpw0cai7wocRUTMBvbKLaBaqY3IvshkE30RaGeMW2v0S2CjXWUnulvP1TLhUBMAB35JYnxdlgANuibsEfnguOmgST2h8fYLqocmtvfPdW07LPYzmG2dy1OpRHEHNbkBDbsZcX5HqUHo5QJmXN7u0J17lcx1lUjbSPt89z2XVULyWPwuHmvtWQ2Q3/i2+n+1ZPpKSRoHfc7BNZqGHDm7ImYboXgRu23NpsUfiGyyVjWZRTEhD6ymcOVwjzHWK+zOaRYocbNYkVD3DYuHdYXyO5u+6ZsQo2m6XKynAKXizGKoqT1WFrC43K0TR8lphg0RihWLmPR2aP5ghjnAAedvVH/ABBGLD+YJfnZqFeJKRZI7ib5DVXUjRmsd1U1mYE8rLS0APB5OaCihWSq2KCOGpR6qiJBy6+bdUIfRSAXcHDuLKtojTNeEM3Kiuw3Ruui+rGLcJoi9/ECMvI6LXV4XmlAZoOdkf8AZAm4AHWyghy3O5KnvslyA2I0EcUV/i6pn8Mv/CAvu3sscOGmdwbkdI5x4Y2DOSvQvDvgj2YDqg5QNqaM3PqeXopZM0McXyKY7bQqVdK+SSzA52b3QBfSyDV0JhqGA2uwjRerTUl3ERMawWsMo2AXnniygEdXGBcgObmJ1uV53z/WsuRxPRlHVgnE7Pc07WaPK1iqH1hkmDRa2cH1VdTdxB+Ztj31UwCC8jb/ADa31XfQljvhdMW3Pz6lG49FVSQaBbA1GJmVlhKzVAt/YoiGf6WepAO6biDkLmIVPIXugsrDuUx1FMNTZCK5gH9kvELYIbFdy3eysOyso6fmVpmZoilQon+I26DyKBSs5/RMfiGPceSATHQX5aGyeIkiUoGoPMLia/CQRwCxB0VtJTPcC4cQbvbRdexN7kOPUWSPJFOrNR9pakgjLYjmw8ldiFUcuxc4/CziA9Vpw/BhK4ZGzA/lFkdrPBkxjHsXtzDeKfhv2K5p/bhhNKUqC4OhOpATy1PLdRbKijmpnWnZJG75ZBYHsdiovQjJSVxdo5noLYTNKSM4AanbAvCU9XZ7rwwH+M8cTx+Uf1TX4W8FRUoDpvZzTAaXbmjj7A7901k2Xn5vqpaDHFe2D8IwaCkZlhYASOKZ/G9/crVJrp1X0m6sY1eVOcssq8OlJRMzoQ1p6lebeLqQmbOBfJa4Xo1dP8I3QjEMNzDNYE21HVcsM6xZrj4XjdbPFq6EgkgmzXEEDXS+iv8AD/FKNcpdqL9eYTBjOBPzSGMHrlCTy4seHtJa5jtQPhI8uS+i+fPDMtPZGf47PXqEHKL72Wg+QJueXJB/DWMNqYukkekkfTz7IyF0cWtA5J7Pjyh1TIts5KCVoJ+qwTieZDJWi/mVdNm2F1zFTOJub/qsY6gYuZytUjMoWIgn/LrUZgXFaTOlTE48vp73ZPGJziFpe6xPwt6lJEZfO/L7zpHHQDlzTcaXJ9EnJXRfg82QeT/VqcsJiY+xyC9uVrIZS4AyYNEV2PY3ja7Sx6IvQYFURODXaBwvZjtCvA+vNjnf5UzohFjJhrBsA0Eb20RZkIWKkoS1odxXbvc30RaJq8KTTetlDLU0EczDHLHHIx27JW5gvq35FE0Z5IqoyaQHFPwOU9YyRjZI3NeyRt2yM1BC5dKoovT+nJLlRKCR2xV11RkaANXP0aFFEmSbhhlJdmSuVFNNS21cbuO60yNGU9lFEkMcVDQXJ2B6jDwTmtqOXUdEkeN/BZkBqaYXkt+JE3T2o6j836qKKfy5ZYcsZQfYciuOxCwvEJIJA5pLXs2J2I6Fel4Lj0dQ0fDI0ccROo/uFFF9zJJxs4McmpUEpLEIZM3VRRQOo+Ngvy3WllNZRRAINrmm9hr5bIVimIx0zCXFpfbSFpsfXooongk2TyNpCHiOIyVEh3Jdo1jNQPIBeheCfC37LH7edv4sws2E6lg6dzzUUXl/9zNPHjUIukxfnScrYdOAAH2jXFkrjdxbqO1kQihkczXLePbKNCvii+Sc5S7O9Gukdca8+S6phrY/CVFEq8MX1krI2Oke5rWxi7nu0sooovR+f545I8mI5Uf/2Q==', frName: 'FNG' },
        { id: 3, frAva:'data:image/jpeg;base64,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', frName: 'Gaben' }
    ]
};

const NavPageReducer = (state = initialState, action) => {

    return state;
};

export default NavPageReducer;