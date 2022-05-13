import React, { useEffect, useState } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { SynapseClient, SynapseConstants } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserBundle } from 'synapse-react-client/dist/utils/synapseTypes'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'
import EditIcon from '../assets/RedEditPencil.svg'

export type ConfigureEmailProps = {
    returnToUrl: string
}

export const ConfigureEmail = (props: ConfigureEmailProps) => {
    const { accessToken } = useSynapseContext()
    const [newEmail, setNewEmail] = useState('')
    const [primaryEmail, setPrimaryEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [emails, setEmails] = useState<string[] | undefined>()
    const [editEmail, setEditEmail] = useState(false)

    const btnStyle = {
        margin: '4px',
        borderRadius: '8px',
        padding: '0.375rem 0.75rem',
        height: '38px'
    }

    const emailVerificationToken = getSearchParam('emailValidationSignedToken')
    const getData = async () => {
        try {
            const mask = SynapseConstants.USER_BUNDLE_MASK_USER_PROFILE
            const bundle: UserBundle = await SynapseClient.getMyUserBundle(mask, accessToken)
            const getPrimaryEmail = await SynapseClient.getNotificationEmail(accessToken)
            setUserId(bundle.userId)
            setEmails(bundle.userProfile?.emails)
            setPrimaryEmail(getPrimaryEmail.email)
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }
    useEffect(() => {
        if (emailVerificationToken) {
            const hexDecodeEmailToken = hexDecodeAndDeserialize(emailVerificationToken)
            try {
                SynapseClient.addEmailAddressStep2(hexDecodeEmailToken, accessToken)
                    .then(() => {
                        displayToast("Email has been successfully added", 'success')
                    })
                getData()
            } catch (err: any) {
                displayToast(err.reason as string, 'danger')
            }
        }
    }, [])

    const changePrimaryEmail = async (event: React.SyntheticEvent, email: string) => {
        event.preventDefault()
        try {
            setPrimaryEmail(email)
            await SynapseClient.updateNotificationEmail(email, accessToken)
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    const deleteEmail = async (event: React.SyntheticEvent, email: string) => {
        event.preventDefault()
        try {
            let deletedEmailList = emails?.filter(item => item !== email)
            setEmails(deletedEmailList)
            await SynapseClient.deleteEmail(accessToken, email)
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    const addEmail = async (event: React.SyntheticEvent, email: string) => {
        event.preventDefault()
        try {
            const callbackUrl = `${window.location.protocol}//${window.location.host}${props.returnToUrl}?emailValidationSignedToken=`
            await SynapseClient.addEmailAddressStep1(email, userId, callbackUrl, accessToken)
            displayToast(`We've sent an email to ${email}. Please check your email to continue.`, 'success')
            setNewEmail('')
        } catch (err: any) {
            displayToast(err.reason as string, 'danger')
        }
    }

    useEffect(() => {
        getData()
    }, [accessToken])

    return (
        <div className='bootstrap-4-backport'>
            {emails?.map(email => {
                if (email === primaryEmail) {
                    return <div key={email}><strong>{email} (Primary)</strong><button onClick={() => setEditEmail(!editEmail)}><img src={EditIcon} alt='edit icon' /></button></div>
                } else {
                    return (
                        <div key={email}>
                            {email}
                            <Button style={btnStyle} variant='secondary' onClick={e => changePrimaryEmail(e, email)}>Make primary</Button>
                            <Button style={btnStyle} variant='secondary' onClick={e => deleteEmail(e, email)}>X</Button>
                        </div>)
                }
            })}
            {editEmail && <form>
                <FormGroup>
                    <FormControl
                        onChange={e => setNewEmail(e.target.value)}
                        placeholder='New email address'
                        value={newEmail}
                    />
                </FormGroup>
                <Button
                    style={btnStyle}
                    disabled={!newEmail}
                    onClick={e => {
                        addEmail(e, newEmail)
                        setEditEmail(false)
                    }}>
                    + Add email
                </Button>
            </form>}
        </div>
    )
} 